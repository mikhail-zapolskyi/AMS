import { ICreateUserDto } from "../interfaces/craete.user.dto";
import { IPutUserDto } from "../interfaces/put.user.dto";
import { IPatchUserDto } from "../interfaces/patch.user.dto";
import MongooseService from "../services/mongoose.service";

import shortid from "shortid";
import debug from "debug";
import e from "express";

const log: debug.IDebugger = debug('app: in-mamory-dao');

class UsersDao {
     
     Schema = MongooseService.getMongoose().Schema;

     userSchema = new this.Schema({
          _id: String,
          email: String,
          password: { type: String, select: false },
          firstName: String,
          lastName: String,
          permissionFlags: Number,
     }, { id: false });

     User = MongooseService.getMongoose().model('Users', this.userSchema);
     
     constructor(){
          log('Created new instance of UsersDao')
     }

     async addUser(userFields: ICreateUserDto){
          const userId = shortid.generate();
          const user = new this.User({
               _id: userId, ...userFields, permissionFlags: 1
          })
          await user.save()
          return userId
     }

     async getUsers(limit = 25, page = 0) {
          return this.User.find()
               .limit(limit)
               .skip(limit * page)
               .exec()
     }

     async getUserById(userId: string){
          return this.User.findOne({ _id: userId }).populate('User').exec()
     }

     async getUserByEmail(email: string) {
          return this.User.findOne({ email: email }).exec()
     }
      
     async updateUserById(userId: string, userFields: IPatchUserDto | IPutUserDto ) {
          const existingUser = await this.User.findOneAndUpdate(
               {_id: userId},
               {$set: userFields},
               { new: true }
          ).exec()

          return existingUser
     }

     async removeUserById(userId: string) {
          return this.User.deleteOne({ _id: userId }).exec()
     }
};

export default new UsersDao();



