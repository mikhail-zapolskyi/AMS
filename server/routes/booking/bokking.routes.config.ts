import { Application, NextFunction, Request, Response } from 'express';
import { CommonRoutesConfig } from '../config/common.routes.config';

export class BookingRoutes extends CommonRoutesConfig {
     constructor(app: Application){
          super(app, 'BookingRoutes')
     }

     configureRoutes() {
          
          this.app.route('/booking')
               .all(( req: Request, res: Response, next: NextFunction) => {
                    // RUN SOME CONDITIONS BEFORE ALL REQUESTS

                    next()
               })
               .get((req: Request, res: Response) => {
                    res.status(200).send(`List of appointments`)
               })
               .post((req: Request, res: Response) => {
                    res.status(200).send('Add appointment to calendar')
               })
          
          this.app.route('/booking/:appointmentId')
               .put((req: Request, res: Response) => {
                    res.status(200).send('Replace whole appointment')
               })
               .patch((req: Request, res: Response) => {
                    res.status(200).send('Replace parts of the appointment')
               })
               .delete((req: Request, res: Response) => {
                    res.status(200).send('Delete appointment')
               })
               
          return this.app
     }
}