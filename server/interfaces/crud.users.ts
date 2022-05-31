export interface ICrudUsers {
     list: (limit: number, page: number) => Promise<any>;
     create: (resource: any) => Promise<any>;
     putById: (id: string, resource: any) => Promise<string>;
     findById: (id: string) => Promise<any>;
     patchById: (id: string, resource: any) => Promise<string>;
     deleteById: (id: string) => Promise<any>;
}