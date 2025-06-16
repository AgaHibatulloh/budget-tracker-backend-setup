const express = require('express');
const router = express.Router();

const UserController = require('./user.controller');

const asyncErrorHandler = require('../../err/asyncErrorHandler');

router.get('/', asyncErrorHandler(
    UserController.getALL.bind(UserController)
));

module.exports = router;