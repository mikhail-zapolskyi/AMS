"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app: mongoose-service');
class MongooseService {
    constructor() {
        this.count = 1;
        this.mongooseOptions = {
            serverSelectionTimeoutMS: 5000
        };
        this.connectWithRetry = () => {
            log('Connecting to MongoDB...');
            mongoose_1.default.connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
                .then(() => {
                if (mongoose_1.default.connection.readyState === 1) {
                    log('MongoDB connected');
                }
            }).catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL21vbmdvb3NlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTVELE1BQU0sZUFBZTtJQU1oQjtRQUxRLFVBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxvQkFBZSxHQUFHO1lBQ3JCLHdCQUF3QixFQUFFLElBQUk7U0FDakMsQ0FBQztRQVVILHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUNuQixHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtZQUMvQixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUNwRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUcsa0JBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBQztvQkFDbkMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7aUJBQzVCO1lBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFBO2dCQUN0QixHQUFHLENBQUMsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLEtBQUssVUFBVSxZQUFZLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDeEcsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUE7UUFDWixDQUFDLENBQUE7UUFuQkksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELFdBQVc7UUFDTixPQUFPLGtCQUFRLENBQUE7SUFDcEIsQ0FBQztDQWVMO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9