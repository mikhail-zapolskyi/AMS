"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const common_routes_config_1 = require("../config/common.routes.config");
class BookingRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'BookingRoutes');
    }
    configureRoutes() {
        this.app.route('/booking')
            .get((req, res) => {
            res.status(200).send(`List of booking`);
        });
        return this.app;
    }
}
exports.BookingRoutes = BookingRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ra2luZy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcm91dGVzL2Jvb2tpbmcvYm9ra2luZy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlFQUFvRTtBQUVwRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDaEQsWUFBWSxHQUFnQjtRQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBRVYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ3BCLENBQUM7Q0FDTDtBQWJELHNDQWFDIn0=