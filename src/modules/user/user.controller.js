const UserService = require('./user.service');

class UserController{
    async getALL(req, res, next) {
        try{
            const users = await UserService.getALL();
            if(users.length === 0) throw new HostNotFoundError("Data Users Belum ada boy!");
            res.json({
                success: true,
                message: "User Berhasil Di Dapat!",
                data: users
            })

        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();
