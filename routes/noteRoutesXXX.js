const express = require('express')
const router = express.Router()
const notesController = require('../controllers/usersController')

router.route('/')

//read
    .get(notesController.getAllNotes)

//create
    .post(notesController.createNewNote)

//update
    .patch(notesController.updateNote)

//delete
    .delete(notesController.deleteNote)



module.exports = router