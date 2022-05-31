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
const appointments_dao_1 = __importDefault(require("../temp/appointments.dao"));
class AppoinmentsService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointments_dao_1.default.getAppontments();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointments_dao_1.default.getAppointmentById(id);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointments_dao_1.default.createAppointment(resource);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointments_dao_1.default.patchAppointment(id, resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointments_dao_1.default.removeAppointment(id);
        });
    }
}
exports.default = new AppoinmentsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2lubWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2FwcG9pbm1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBdUQ7QUFLdkQsTUFBTSxrQkFBa0I7SUFDYixJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ2pDLE9BQU8sMEJBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDcEIsT0FBTywwQkFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2xELENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUErQjs7WUFDdkMsT0FBTywwQkFBZSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZELENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBOEI7O1lBQ3JELE9BQU8sMEJBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDMUQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3RCLE9BQU8sMEJBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0tBQUE7Q0FDTDtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQSJ9