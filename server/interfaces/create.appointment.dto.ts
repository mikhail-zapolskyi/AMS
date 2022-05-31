export interface ICreateAppointmentDto {
     id: string,
     clientName?: string,
     email?: string,
     title: string,
     body?: string,
     address?: string,
     phone?: string,
     price?: number
     fromDate?: Date,
     toDate?: Date,
}