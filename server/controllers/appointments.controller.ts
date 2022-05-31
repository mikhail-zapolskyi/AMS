import { Request, Response } from "express";
import AppoinmentsService from "../services/appoinments.service";

import debug from 'debug';
import appoinmentsService from "../services/appoinments.service";

const log: debug.IDebugger = debug('app:appointments-controller');

class AppoinmentsController {
     async getAppointments(req: Request, res: Response){
          const appoinments = await AppoinmentsService.list(100, 0);
          res.status(200).send(appoinments)
     }

     async getAppointmentById(req: Request, res: Response){
          const appoinment = await AppoinmentsService.findById(req.body.id)
          res.status(200).send(appoinment)
     }

     async createAppointment(req: Request, res: Response){
          const appoinment = await AppoinmentsService.create(req.body)
          res.status(201).send({ id: req.body.id });
     }

     async patchAppointment(req: Request, res: Response){
          log(await AppoinmentsService.patchById(req.params.appointmentId, req.body))
          res.status(204).send()
     }

     async removeAppointment(req: Request, res: Response){
          log(await AppoinmentsService.deleteById(req.params.appointmentId))
          res.status(204).send()
     }
}

export default new AppoinmentsController();