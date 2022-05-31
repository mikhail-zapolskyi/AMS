import UsersDao from '../DAO/users.dao';
import { ICrudUsers } from "../interfaces/crud.users";
import { ICreateUserDto } from "../interfaces/craete.user.dto";
import { IPatchUserDto } from "../interfaces/patch.user.dto";
import { IPutUserDto } from "../interfaces/put.user.dto";

class UsersService implements ICrudUsers {
     async list(limit: number, page: number) {
          return UsersDao.getUsers(limit, page);
     }
     
     async findById(id: string) {
          return UsersDao.getUserById(id);
     }
     
     async getUserByEmail(email: string) {
          return UsersDao.getUserByEmail(email);
     }

     async create(resource: ICreateUserDto) {
         return UsersDao.addUser(resource);
     }
 
     async patchById(id: string, resource: IPatchUserDto) {
          return UsersDao.updateUserById(id, resource);
     }
     
     async putById(id: string, resource: IPutUserDto) {
          return UsersDao.updateUserById(id, resource);
     }
     
     async deleteById(id: string) {
         return UsersDao.removeUserById(id);
     }
};

export default new UsersService();