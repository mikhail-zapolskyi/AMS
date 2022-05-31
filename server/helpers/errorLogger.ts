import winston from 'winston';
import expressWinston from 'express-winston';

const loggerOptions: expressWinston.LoggerOptions = {
     transports: [new winston.transports.Console()],
     format: winston.format.combine(
          winston.format.json(),
          winston.format.colorize(),
          winston.format.prettyPrint(),
     )
}

export const errorLogger = expressWinston.logger(loggerOptions);