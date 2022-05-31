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
class UsersDao {
    constructor() {
        this.users = [];
        log('Created new instance of UsersDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.id === userId);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1, user);
            return `${user.id} updated via put`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            let currentUser = this.users[objIndex];
            const allowedPatchFields = [
                'password',
                'firstName',
                'lastName',
                'permissionLevel',
            ];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
}
;
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVtcC91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXpELE1BQU0sUUFBUTtJQUdUO1FBRkEsVUFBSyxHQUEwQixFQUFFLENBQUE7UUFHNUIsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUFvQjs7WUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFFSyxRQUFROztZQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN0QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsTUFBYzs7WUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDekUsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEtBQWE7O1lBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNqQyxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUNsRCxDQUFDO1lBQ0YsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLFdBQVcsRUFBRTtnQkFDYixPQUFPLFdBQVcsQ0FBQzthQUN0QjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ04sQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFpQjs7WUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQzdDLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsTUFBYyxFQUFFLElBQW1COztZQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FDN0MsQ0FBQztZQUNGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxrQkFBa0IsR0FBRztnQkFDdkIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsaUJBQWlCO2FBQ3BCLENBQUM7WUFDRixLQUFLLElBQUksS0FBSyxJQUFJLGtCQUFrQixFQUFFO2dCQUNsQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQzthQUNKO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxNQUFjOztZQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FDN0MsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7UUFDaEMsQ0FBQztLQUFBO0NBQ0w7QUFBQSxDQUFDO0FBRUYsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9