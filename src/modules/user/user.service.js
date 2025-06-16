const { user } = require('../../../models');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.SALT_ROUNDS = 10;
    }

    async getALL() {
        return await User.findAll({attributes: { exclude: ['password']}}); 
    }
}

module.exports = new UserService();