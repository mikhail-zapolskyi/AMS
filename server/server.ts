import express, { Application, Request, Response } from 'express';
import * as http from 'http';
import cors from 'cors';
import debug from 'debug';

import { CommonRoutesConfig } from './routes/common/common.routes.config';
import { UsersRoutes } from './routes/users/users.routes.config';
import { AppointmentsRoutes } from './routes/booking/appointments.routes.config';
import { requestLogger } from './helpers/requestLogger';
import { errorLogger } from './helpers/errorLogger';

const app: Application = express();
const server: http.Server = http.createServer(app);
const port = 5005;

// DEBUG ROUTES
const routes: Array<CommonRoutesConfig> = [];

const debugLog: debug.IDebugger = debug('app');

// middleware to parse all incoming requests as JSON 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// middleware to allow cross-origin requests
app.use(cors());

// middleware to log requests
app.use(requestLogger);

// sending the Express.js application object to have the routes added
routes.push(new UsersRoutes(app))
routes.push(new AppointmentsRoutes(app))

// middleware to log errors
app.use(errorLogger);
// this is a simple route to make sure everything is working properly

server.listen(port, () => {
     const msg = `Server running at http://localhost:${port}`;
     
     routes.forEach((route: CommonRoutesConfig) => {
          debugLog(`Routes configured for ${route.getName()}`);
     });
     // our only exception to avoiding console.log(), because we
     // always want to know when the server is done starting up
     console.log(msg);
})