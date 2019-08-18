const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');


router.get('/login', studentController.loginTeacher);

router.post('/addStudent', studentController.addStudent);

router.get('/getAllTeachers', studentController.getAllTeachers);

router.get('/findTeacherById/:id', studentController.findTeacherById);

router.delete('/deleteTeacherById/:id', studentController.deleteTeacherById);

router.put('/editTeacher/:id', studentController.editTeacher);

// Export the Teachers routes
module.exports = router;