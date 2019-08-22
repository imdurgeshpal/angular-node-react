
const Student = require('../models/student');



// add Student
exports.addStudent = (req, res) => {
    const student = new Student({
        id: req.body.id,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fathersName: req.body.fathersName,
        password: req.body.password,
        dob: req.body.dob,
        phoneNumber: req.body.phoneNumber
    });
    student.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Student is added successfully')
    })
};


// get student information by id
exports.findStudentById = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) return next(err);
        res.send(student);
    })
};

// get all students
exports.getAllStudents = (req, res) => {
    Student.find((err, students) => {
        if (err) return next(err);
        res.send(students);
    })
};