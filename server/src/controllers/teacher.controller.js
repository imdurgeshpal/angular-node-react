
const Teacher = require('../models/teacher');


// register teacher
exports.registerTeacher = (req, res) => {
    const teacher = new Teacher({
        id: req.body.id,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
    teacher.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Teacher is registered successfully')
    })
};

// get teacher information by id
exports.findTeacherById = (req, res) => {
    Teacher.findById(req.params.id, (err, teacher) => {
        if (err) return next(err);
        res.send(teacher);
    })
};

// get all teachers
exports.getAllTeachers = (req, res) => {
    Teacher.find((err, teachers) => {
        if (err) return next(err);
        res.send(teachers);
    })
};


// delete teacher by id
exports.deleteTeacherById = (req, res) => {
    Teacher.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


// edit teacher
exports.editTeacher = (req, res) => {
    Teacher.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, teacher) => {
        if (err) return next(err);
        res.send('Teacher udpated.');
    })
};

exports.loginTeacher = (req, res) => {
    const data = {
        username: req.query.username,
        password: req.query.password
    }
    console.log(data.username);
    Teacher.findOne(data, (err, teacher) => {
        if (err) return next(err);
        res.send(teacher);
    })
};