import AppointmentsDao from "../DAO/appointments.dao";
import { ICrudAppointments } from "../interfaces/crud.appointment";
import { ICreateAppointmentDto } from "../interfaces/create.appointment.dto";
import { IPatchAppointmentDto } from "../interfaces/patch.appointment.dto";

class AppoinmentsService implements ICrudAppointments {
     async list(limit: number, page: number) {
          return AppointmentsDao.getAppontments();
     }

     async findById(id: string) {
          return AppointmentsDao.getAppointmentById(id)
     }

     async create(resource: ICreateAppointmentDto) {
          return AppointmentsDao.createAppointment(resource)
     }

     async patchById(id: string, resource: IPatchAppointmentDto){
          return AppointmentsDao.patchAppointment(id, resource)
     }

     async deleteById(id: string) {
          return AppointmentsDao.removeAppointment(id)
     }
}

export default new AppoinmentsService()