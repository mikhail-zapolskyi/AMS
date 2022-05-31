import { ICreateAppointmentDto } from "../interfaces/create.appointment.dto";
import { IPatchAppointmentDto } from "../interfaces/patch.appointment.dto";

import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug('app: in-mamory-dao');

class AppointmentsDao {
     appointments: Array<ICreateAppointmentDto> = []

     constructor(){
          log('Create new instance of Appointment dao')
     }
     
     async getAppontments(){
          return this.appointments
     }

     async getAppointmentById(appointmentId: string) {
          return this.appointments.find((appointment: { id: string }) => appointment.id === appointmentId )
     }

     async createAppointment(appointment: ICreateAppointmentDto){
          appointment.id = shortid.generate();
          this.appointments.push(appointment);
          return appointment.id
     }

     async patchAppointment(appointmentId: string, appointment: IPatchAppointmentDto){
          const objIndex = this.appointments.findIndex((obj: { id: string }) => appointmentId === obj.id);
          let currentAppointment = this.appointments[objIndex];
          
          currentAppointment = { ...currentAppointment, ...appointment }
          
          this.appointments.splice(objIndex, 1, currentAppointment)
          return `${ appointment.id } patched`
     }

     async removeAppointment(appointmentId: string) {
          const objIndex = this.appointments.findIndex((obj: {id: string }) => obj.id === appointmentId);
          this.appointments.splice(objIndex, 1);
          return `${ appointmentId } removed`
     }
}

export default new AppointmentsDao();

