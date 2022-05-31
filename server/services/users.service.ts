import UsersDao from "../temp/users.dao";
import { ICrudUsers } from "../interfaces/crud.users";
import { ICreateUserDto } from "../interfaces/craete.user.dto";
import { IPatchUserDto } from "../interfaces/patch.user.dto";
import { IPutUserDto } from "../interfaces/put.user.dto";

class UsersService implements ICrudUsers {
     async create(resource: ICreateUserDto) {
         return UsersDao.addUser(resource);
     }
 
     async deleteById(id: string) {
         return UsersDao.removeUserById(id);
     }
 
     async list(limit: number, page: number) {
         return UsersDao.getUsers();
     }
 
     async patchById(id: string, resource: IPatchUserDto) {
         return UsersDao.patchUserById(id, resource);
     }
 
     async findById(id: string) {
         return UsersDao.getUserById(id);
     }
 
     async putById(id: string, resource: IPutUserDto) {
         return UsersDao.putUserById(id, resource);
     }
 
     async getUserByEmail(email: string) {
         return UsersDao.getUserByEmail(email);
     }
 };

 export default new UsersService();