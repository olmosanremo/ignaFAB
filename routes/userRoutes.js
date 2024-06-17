const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.route('/')

//read
    .get(usersController.getAllUsers)

//create
    .post(usersController.createNewUser)

//update
    .patch(usersController.updateUser)

//delete
    .delete(usersController.deleteUser)



module.exports = router