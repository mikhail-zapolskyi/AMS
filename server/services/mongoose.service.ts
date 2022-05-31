import mongoose from "mongoose";
import debug from 'debug';

const log: debug.IDebugger = debug('app: mongoose-service');

class MongooseService {
     private count = 1
     private mongooseOptions = {
          serverSelectionTimeoutMS: 5000
      };
     
     constructor(){
          this.connectWithRetry()
     }

     getMongoose(){
          return mongoose
     }

     connectWithRetry = () => {
          log('Connecting to MongoDB...')
          mongoose.connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
               .then(() => {
                    if(mongoose.connection.readyState === 1){
                         log('MongoDB connected')
                    }
               }).catch((err) => {
                    const retrySeconds = 5
                    log(`MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySeconds} seconds):`, err)
                    setTimeout(this.connectWithRetry, retrySeconds * 1000);
               })
     }
}

export default new MongooseService();