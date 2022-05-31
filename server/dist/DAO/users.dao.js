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
const mongoose_service_1 = __importDefault(require("../services/mongoose.service"));
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app: in-mamory-dao');
class UsersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            _id: String,
            email: String,
            password: { type: String, select: false },
            firstName: String,
            lastName: String,
            permissionFlags: Number,
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('Users', this.userSchema);
        log('Created new instance of UsersDao');
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign(Object.assign({ _id: userId }, userFields), { permissionFlags: 1 }));
            yield user.save();
            return userId;
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ _id: userId }).populate('User').exec();
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email }).exec();
        });
    }
    updateUserById(userId, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.deleteOne({ _id: userId }).exec();
        });
    }
}
;
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vREFPL3VzZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLG9GQUEyRDtBQUUzRCxzREFBOEI7QUFDOUIsa0RBQTBCO0FBRzFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXpELE1BQU0sUUFBUTtJQWVUO1FBYkEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsR0FBRyxFQUFFLE1BQU07WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUN6QyxTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixlQUFlLEVBQUUsTUFBTTtTQUMzQixFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbEIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHaEUsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVLLE9BQU8sQ0FBQyxVQUEwQjs7WUFDbkMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLCtCQUNyQixHQUFHLEVBQUUsTUFBTSxJQUFLLFVBQVUsS0FBRSxlQUFlLEVBQUUsQ0FBQyxJQUNqRCxDQUFBO1lBQ0YsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDakIsT0FBTyxNQUFNLENBQUE7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFBO1FBQ2pCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFjOztZQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3RFLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxLQUFhOztZQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdEQsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUF1Qzs7WUFDdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUNoRCxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsRUFDYixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsRUFDbEIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQ2pCLENBQUMsSUFBSSxFQUFFLENBQUE7WUFFUixPQUFPLFlBQVksQ0FBQTtRQUN4QixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3ZELENBQUM7S0FBQTtDQUNMO0FBQUEsQ0FBQztBQUVGLGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==