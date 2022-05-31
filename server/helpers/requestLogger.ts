import winston from 'winston';
import expressWinston from 'express-winston';

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

export const requestLogger = expressWinston.logger(loggerOptions);