const UserModel = require('../models/user-model');
class UserService {
    async findUser(filter) {
        const user = await UserModel.findOne(filter);
        return user;
    }

    async createUser(data) {
        const user = await UserModel.create(data);
        return user;
    }
    async createBio(data) {
        const bio = await UserModel.create(data);
        return bio;
    }
 async getuser (req,res){
    const user  = await UserModel.find({})
    res.send(user);
 }
}

module.exports = new UserService();
