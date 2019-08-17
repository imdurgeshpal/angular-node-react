const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher.controller');


router.get('/login', teacherController.loginTeacher);

router.post('/registerTeacher', teacherController.registerTeacher);

router.get('/getAllTeachers', teacherController.getAllTeachers);

router.get('/findTeacherById/:id', teacherController.findTeacherById);

router.delete('/deleteTeacherById/:id', teacherController.deleteTeacherById);

router.put('/editTeacher/:id', teacherController.editTeacher);

// Export the Teachers routes
module.exports = router;