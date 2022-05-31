"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appoinments_service_1 = __importDefault(require("../services/appoinments.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:appointments-controller');
class AppoinmentsController {
    getAppointments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const appoinments = yield appoinments_service_1.default.list(100, 0);
            res.status(200).send(appoinments);
        });
    }
    getAppointmentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const appoinment = yield appoinments_service_1.default.findById(req.body.id);
            res.status(200).send(appoinment);
        });
    }
    createAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const appoinment = yield appoinments_service_1.default.create(req.body);
            res.status(201).send({ id: req.body.id });
        });
    }
    patchAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield appoinments_service_1.default.patchById(req.params.appointmentId, req.body));
            res.status(204).send();
        });
    }
    removeAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield appoinments_service_1.default.deleteById(req.params.appointmentId));
            res.status(204).send();
        });
    }
}
exports.default = new AppoinmentsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9hcHBvaW50bWVudHMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDBGQUFpRTtBQUVqRSxrREFBMEI7QUFHMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFbEUsTUFBTSxxQkFBcUI7SUFDaEIsZUFBZSxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUM1QyxNQUFNLFdBQVcsR0FBRyxNQUFNLDZCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQy9DLE1BQU0sVUFBVSxHQUFHLE1BQU0sNkJBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDckMsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzlDLE1BQU0sVUFBVSxHQUFHLE1BQU0sNkJBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzdDLEdBQUcsQ0FBQyxNQUFNLDZCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUMzRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzNCLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLEdBQVksRUFBRSxHQUFhOztZQUM5QyxHQUFHLENBQUMsTUFBTSw2QkFBa0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDM0IsQ0FBQztLQUFBO0NBQ0w7QUFFRCxrQkFBZSxJQUFJLHFCQUFxQixFQUFFLENBQUMifQ==