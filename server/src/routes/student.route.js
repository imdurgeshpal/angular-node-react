const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');


//router.get('/login', studentController.loginStudent);

router.post('/addStudent', studentController.addStudent);

router.get('/getAllStudents', studentController.getAllStudents);

router.get('/findStudentById/:id', studentController.findStudentById);

// Export the Student routes
module.exports = router;