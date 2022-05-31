import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UsersService from '../services/users.service';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
     async listUsers(req: Request, res: Response) {
         const users = await UsersService.list(100, 0);
         res.status(200).send(users);
     }
 
     async getUserById(req: Request, res: Response) {
         const user = await UsersService.findById(req.body.id);
         res.status(200).send(user);
     }
 
     async createUser(req: Request, res: Response) {
         req.body.password = await bcrypt.hash(req.body.password, 10);
         const userId = await UsersService.create(req.body);
         res.status(201).send({ id: userId });
     }
 
     async patch(req: Request, res: Response) {
         if (req.body.password) {
             req.body.password = await bcrypt.hash(req.body.password, 10);
         }
         log(await UsersService.patchById(req.body.id, req.body));
         res.status(204).send();
     }
 
     async put(req: Request, res: Response) {
         req.body.password = await bcrypt.hash(req.body.password, 10);
         log(await UsersService.putById(req.body.id, req.body));
         res.status(204).send();
     }
 
     async removeUser(req: Request, res: Response) {
         log(await UsersService.deleteById(req.body.id));
         res.status(204).send();
     }
}
 
 export default new UsersController();

