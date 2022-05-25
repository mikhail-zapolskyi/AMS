"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../config/common.routes.config");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route('/users')
            .get((req, res) => {
            res.status(200).send('List of users');
        })
            .post((req, res) => {
            res.status(201).send('Post to users');
        });
        this.app.route('/users/:userId')
            .all((req, res, next) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get((req, res) => {
            res.status(200).send(`Get request for id ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`Post request for id ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH request for id ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE request for id ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JvdXRlcy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlFQUFvRTtBQUVwRSxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUFnQjtRQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFHLEVBQUU7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxQixHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUcsRUFBRTtZQUNyRCxxRUFBcUU7WUFDckUsaURBQWlEO1lBQ2pELDhFQUE4RTtZQUM5RSxJQUFJLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBdUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3RFLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBd0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZFLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ3BCLENBQUM7Q0FDTDtBQXBDRCxrQ0FvQ0MifQ==