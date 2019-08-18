const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    id: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

// Export the Student model
module.exports = mongoose.model('Student', Student);