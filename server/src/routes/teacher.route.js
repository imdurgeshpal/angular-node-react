const express = require('express');
const router = express.Router();
const teacher_controller = require('../controllers/teacher.controller');


router.post('/registerTeacher', teacher_controller.registerTeacher);

router.get('/getAllTeachers', teacher_controller.getAllTeachers);

router.get('/findTeacherById/:id', teacher_controller.findTeacherById);

router.delete('/deleteTeacherById/:id', teacher_controller.deleteTeacherById);

router.put('/editTeacher/:id', teacher_controller.editTeacher);

// Export the Teachers routes
module.exports = router;