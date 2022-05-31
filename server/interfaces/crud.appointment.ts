export interface ICrudAppointments {
     list: (limit: number, page: number) => Promise<any>
     findById: (id: string) => Promise<any>;
     create: (resource: any) => Promise<any>;
     patchById: (id: string, resource: any) => Promise<string>;
     deleteById: (id: string) => Promise<string>;
}