import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutesConfig } from '../config/common.routes.config';

export class UsersRoutes extends CommonRoutesConfig {
     constructor(app: Application) {
          super(app, 'UsersRoutes')
     }

     configureRoutes() {
          this.app.route('/users')
               .get((req: Request, res: Response) => {
                    res.status(200).send('List of users')
               })
               .post((req: Request, res: Response ) => {
                    res.status(201).send('Post to users')
               });

          this.app.route('/users/:userId') 
               .all((req: Request, res: Response, next: NextFunction ) => {
                    // this middleware function runs before any request to /users/:userId
                    // but it doesn't accomplish anything just yet---
                    // it simply passes control to the next applicable function below using next()
                    next();
               })
               .get((req: Request, res: Response) => {
                    res.status(200).send(`Get request for id ${ req.params.userId }`)
               })
               .put((req: Request, res: Response) => {
                    res.status(200).send(`Post request for id ${ req.params.userId }`)
               })
               .patch((req: Request, res: Response) => {
                    res.status(200).send(`PATCH request for id ${req.params.userId}`);
               })
               .delete((req: Request, res: Response) => {
                    res.status(200).send(`DELETE request for id ${req.params.userId}`);
               });

          return this.app
     }
}