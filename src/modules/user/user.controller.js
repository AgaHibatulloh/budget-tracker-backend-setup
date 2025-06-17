const UserService = require('./user.service');
const NotFound = require('../../errors/notFoundError');


class UserController{
    async getALL(req, res, next) {
        try{
            const users = await UserService.getALL();
            if(users.length === 0) throw new NotFound("Data Users Belum ada boy!");
            res.json({
                success: true,
                message: "User Berhasil Di Dapat!",
                data: users
            })

        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try{
            const user = await UserService.getById(req.params.id);
            if(!user) throw new NotFound("Data User Belum ada boy!");
            res.json({
                success: true,
                message: "User Berhasil Di Dapat!",
                data: user
            })

        } catch (err) {
            next(err);
        }
    }
    async create(req, res, next) {
        try { 
            const user = await UserService.create(req.body);
            res.status(201).json({succes: true, message: "User Berhasil Di Buat!", data: user});
        }catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try { 
            const user = await UserService.update(req.params.id, req.body);
            if(!user) throw new NotFound("Data User Tidak Ditemukan!");
            res.status(200).json({success: true, message: "User Berhasil Di Update!", data: user});
        }catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try { 
            const user = await UserService.delete(req.params.id);
            if(!user) throw new NotFound("Data User Tidak Ditemukan!");
            res.status(200).json({success: true, message: "User Berhasil Di hapus!"});
        }catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();
