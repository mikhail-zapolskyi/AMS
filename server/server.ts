import express, { Application, Request, Response } from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import { CommonRoutesConfig } from './routes/config/common.routes.config';
import { UsersRoutes } from './routes/users/users.routes.config';
import { BookingRoutes } from './routes/booking/bokking.routes.config';

const app: Application = express();
const server: http.Server = http.createServer(app);
const port = 5005;

// DEBUG ROUTES
const routes: Array<CommonRoutesConfig> = [];

const debugLog: debug.IDebugger = debug('app');

// middleware to parse all incoming requests as JSON 
app.use(express.json());

// middleware to allow cross-origin requests
app.use(cors());

// log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
     transports: [new winston.transports.Console()],
     format: winston.format.combine(
          winston.format.json(),
          winston.format.prettyPrint(),
          winston.format.colorize({ all: true })
     ),
};

if(!process.env.DEBUG) {
     loggerOptions.meta = false;
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// sending the Express.js application object to have the routes added
routes.push(new UsersRoutes(app))
routes.push(new BookingRoutes(app))

// this is a simple route to make sure everything is working properly
const serverMsg = `Server running at http://localhost:${port}`;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send(serverMsg)
});

server.listen(port, () => {
     routes.forEach((route: CommonRoutesConfig) => {
          debugLog(`Routes configured for ${route.getName()}`);
     });
     // our only exception to avoiding console.log(), because we
     // always want to know when the server is done starting up
     console.log(serverMsg);
})