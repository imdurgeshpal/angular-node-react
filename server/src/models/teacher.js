const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teacher = new Schema({
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

// Export the Teacher model
module.exports = mongoose.model('Teacher', Teacher);