"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const appointments_controller_1 = __importDefault(require("../../controllers/appointments.controller"));
class AppointmentsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'BookingRoutes');
    }
    configureRoutes() {
        this.app.route('/appointments')
            .all((req, res, next) => {
            // RUN SOME CONDITIONS BEFORE ALL REQUESTS
            next();
        })
            .get(appointments_controller_1.default.getAppointments)
            .post(appointments_controller_1.default.createAppointment);
        this.app.route('/appointments/:appointmentId')
            .all((req, res, next) => {
            // RUN SOME CONDITIONS BEFORE ALL REQUESTS
            next();
        })
            .get(appointments_controller_1.default.getAppointmentById)
            .patch(appointments_controller_1.default.patchAppointment)
            .delete(appointments_controller_1.default.removeAppointment);
        return this.app;
    }
}
exports.AppointmentsRoutes = AppointmentsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yb3V0ZXMvYm9va2luZy9hcHBvaW50bWVudHMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RUFBb0U7QUFDcEUsd0dBQStFO0FBRS9FLE1BQWEsa0JBQW1CLFNBQVEseUNBQWtCO0lBQ3JELFlBQVksR0FBZ0I7UUFDdkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsZUFBZTtRQUVWLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN6QixHQUFHLENBQUMsQ0FBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtZQUNyRCwwQ0FBMEM7WUFFMUMsSUFBSSxFQUFFLENBQUE7UUFDWCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsaUNBQXNCLENBQUMsZUFBZSxDQUFDO2FBQzNDLElBQUksQ0FBQyxpQ0FBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRXBELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxDQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ3JELDBDQUEwQztZQUUxQyxJQUFJLEVBQUUsQ0FBQTtRQUNYLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxpQ0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5QyxLQUFLLENBQUMsaUNBQXNCLENBQUMsZ0JBQWdCLENBQUM7YUFDOUMsTUFBTSxDQUFDLGlDQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFdEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ3BCLENBQUM7Q0FDTDtBQTVCRCxnREE0QkMifQ==