"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const users_routes_config_1 = require("./routes/users/users.routes.config");
const appointments_routes_config_1 = require("./routes/booking/appointments.routes.config");
const requestLogger_1 = require("./helpers/requestLogger");
const errorLogger_1 = require("./helpers/errorLogger");
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = 5005;
// DEBUG ROUTES
const routes = [];
const debugLog = (0, debug_1.default)('app');
// middleware to parse all incoming requests as JSON 
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// middleware to log requests
app.use(requestLogger_1.requestLogger);
// sending the Express.js application object to have the routes added
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new appointments_routes_config_1.AppointmentsRoutes(app));
// middleware to log errors
app.use(errorLogger_1.errorLogger);
// this is a simple route to make sure everything is working properly
server.listen(port, () => {
    const msg = `Server running at http://localhost:${port}`;
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(msg);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBa0U7QUFDbEUsMkNBQTZCO0FBQzdCLGdEQUF3QjtBQUN4QixrREFBMEI7QUFHMUIsNEVBQWlFO0FBQ2pFLDRGQUFpRjtBQUNqRiwyREFBd0Q7QUFDeEQsdURBQW9EO0FBRXBELE1BQU0sR0FBRyxHQUFnQixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsZUFBZTtBQUNmLE1BQU0sTUFBTSxHQUE4QixFQUFFLENBQUM7QUFFN0MsTUFBTSxRQUFRLEdBQW9CLElBQUEsZUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztBQUU5Qyw0Q0FBNEM7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFFaEIsNkJBQTZCO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO0FBRXZCLHFFQUFxRTtBQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSwrQ0FBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRXhDLDJCQUEyQjtBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsQ0FBQztBQUNyQixxRUFBcUU7QUFFckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE1BQU0sR0FBRyxHQUFHLHNDQUFzQyxJQUFJLEVBQUUsQ0FBQztJQUV6RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1FBQ3hDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQSJ9