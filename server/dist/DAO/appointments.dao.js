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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0RBTy9hcHBvaW50bWVudHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0Esc0RBQThCO0FBQzlCLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLGVBQWU7SUFHaEI7UUFGQSxpQkFBWSxHQUFpQyxFQUFFLENBQUE7UUFHMUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVLLGNBQWM7O1lBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO1FBQzdCLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLGFBQXFCOztZQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBMkIsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUUsQ0FBQTtRQUN0RyxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxXQUFrQzs7WUFDckQsV0FBVyxDQUFDLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQTtRQUMxQixDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxhQUFxQixFQUFFLFdBQWlDOztZQUMxRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEcsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJELGtCQUFrQixtQ0FBUSxrQkFBa0IsR0FBSyxXQUFXLENBQUUsQ0FBQTtZQUU5RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUE7WUFDekQsT0FBTyxHQUFJLFdBQVcsQ0FBQyxFQUFHLFVBQVUsQ0FBQTtRQUN6QyxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxhQUFxQjs7WUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLGFBQWEsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLEdBQUksYUFBYyxVQUFVLENBQUE7UUFDeEMsQ0FBQztLQUFBO0NBQ0w7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=