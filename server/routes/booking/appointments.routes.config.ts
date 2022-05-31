import { Application, NextFunction, Request, Response } from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import AppointmentsController from '../../controllers/appointments.controller';

export class AppointmentsRoutes extends CommonRoutesConfig {
     constructor(app: Application){
          super(app, 'BookingRoutes')
     }

     configureRoutes() {
          
          this.app.route('/appointments')
               .all(( req: Request, res: Response, next: NextFunction) => {
                    // RUN SOME CONDITIONS BEFORE ALL REQUESTS

                    next()
               })
               .get(AppointmentsController.getAppointments)
               .post(AppointmentsController.createAppointment)
          
          this.app.route('/appointments/:appointmentId')
               .all(( req: Request, res: Response, next: NextFunction) => {
                    // RUN SOME CONDITIONS BEFORE ALL REQUESTS

                    next()
               })
               .get(AppointmentsController.getAppointmentById)
               .patch(AppointmentsController.patchAppointment)
               .delete(AppointmentsController.removeAppointment)

          return this.app
     }
}