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
const users_dao_1 = __importDefault(require("../DAO/users.dao"));
class UsersService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUsers(limit, page);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserById(id);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserByEmail(email);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.addUser(resource);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.updateUserById(id, resource);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.updateUserById(id, resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.removeUserById(id);
        });
    }
}
;
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBd0M7QUFNeEMsTUFBTSxZQUFZO0lBQ1AsSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNqQyxPQUFPLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDcEIsT0FBTyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDN0IsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBd0I7O1lBQ2pDLE9BQU8sbUJBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUF1Qjs7WUFDOUMsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEVBQVUsRUFBRSxRQUFxQjs7WUFDMUMsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0w7QUFBQSxDQUFDO0FBRUYsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9