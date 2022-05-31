"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const loggerOptions = {
    transports: [new winston_1.default.transports.Console()],
    format: winston_1.default.format.combine(winston_1.default.format.json(), winston_1.default.format.colorize(), winston_1.default.format.prettyPrint())
};
exports.errorLogger = express_winston_1.default.logger(loggerOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9oZWxwZXJzL2Vycm9yTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixzRUFBNkM7QUFFN0MsTUFBTSxhQUFhLEdBQWlDO0lBQy9DLFVBQVUsRUFBRSxDQUFDLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsTUFBTSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDekIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUN6QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FDaEM7Q0FDTCxDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcseUJBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMifQ==