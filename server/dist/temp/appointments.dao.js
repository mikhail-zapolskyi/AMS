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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app: in-mamory-dao');
class AppointmentsDao {
    constructor() {
        this.appointments = [];
        log('Create new instance of Appointment dao');
    }
    getAppontments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.appointments;
        });
    }
    getAppointmentById(appointmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.appointments.find((appointment) => appointment.id === appointmentId);
        });
    }
    createAppointment(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            appointment.id = shortid_1.default.generate();
            this.appointments.push(appointment);
            return appointment.id;
        });
    }
    patchAppointment(appointmentId, appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.appointments.findIndex((obj) => appointmentId === obj.id);
            let currentAppointment = this.appointments[objIndex];
            currentAppointment = Object.assign(Object.assign({}, currentAppointment), appointment);
            // for (let field in appointment) {
            //      if(field in currentAppointment){
            //           //@ts-ignore
            //           currentAppointment[field] = appointment[field]
            //      }
            // }
            this.appointments.splice(objIndex, 1, currentAppointment);
            return `${appointment.id} patched`;
        });
    }
    removeAppointment(appointmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.appointments.findIndex((obj) => obj.id === appointmentId);
            this.appointments.splice(objIndex, 1);
            return `${appointmentId} removed`;
        });
    }
}
exports.default = new AppointmentsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RlbXAvYXBwb2ludG1lbnRzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLHNEQUE4QjtBQUM5QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFekQsTUFBTSxlQUFlO0lBR2hCO1FBRkEsaUJBQVksR0FBaUMsRUFBRSxDQUFBO1FBRzFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFSyxjQUFjOztZQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUM3QixDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxhQUFxQjs7WUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQTJCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssYUFBYSxDQUFFLENBQUE7UUFDdEcsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsV0FBa0M7O1lBQ3JELFdBQVcsQ0FBQyxFQUFFLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUE7UUFDMUIsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsYUFBcUIsRUFBRSxXQUFpQzs7WUFDMUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hHLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyRCxrQkFBa0IsbUNBQVEsa0JBQWtCLEdBQUssV0FBVyxDQUFFLENBQUE7WUFFOUQsbUNBQW1DO1lBQ25DLHdDQUF3QztZQUN4Qyx5QkFBeUI7WUFDekIsMkRBQTJEO1lBQzNELFNBQVM7WUFDVCxJQUFJO1lBRUosSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3pELE9BQU8sR0FBSSxXQUFXLENBQUMsRUFBRyxVQUFVLENBQUE7UUFDekMsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsYUFBcUI7O1lBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsT0FBTyxHQUFJLGFBQWMsVUFBVSxDQUFBO1FBQ3hDLENBQUM7S0FBQTtDQUNMO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9