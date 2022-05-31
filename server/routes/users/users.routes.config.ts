import { Application, Request, Response, NextFunction } from 'express';
import { logger } from 'express-winston';
import { CommonRoutesConfig } from '../common/common.routes.config';
import UsersController from '../../controllers/users.controller';
import UsersValidation from '../../middleware/users.validation';

export class UsersRoutes extends CommonRoutesConfig {
     constructor(app: Application) {
          super(app, 'UsersRoutes')
     }

     configureRoutes(): Application {
          this.app.route('/users')
               .get(UsersController.listUsers)
               .post(
                    UsersValidation.validateRequiredUserBodyFields,
                    UsersValidation.validateSameEmailDoesntExist,
                    UsersController.createUser
               );
          this.app.param(`userId`, UsersValidation.extractUserId);
          this.app
               .route(`/users/:userId`)
               .all(UsersValidation.validateUserExists)
               .get(UsersController.getUserById)
               .delete(UsersController.removeUser);
          this.app.put(`/users/:userId`, [
               UsersValidation.validateRequiredUserBodyFields,
               UsersValidation.validateSameEmailBelongToSameUser,
               UsersController.put,
          ]);
     
          this.app.patch(`/users/:userId`, [
               UsersValidation.validatePatchEmail,
               UsersController.patch,
          ]);
     
          return this.app;
     }
}