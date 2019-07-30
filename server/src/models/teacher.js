const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teacher = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Export the Teacher model
module.exports = mongoose.model('Teacher', Teacher);