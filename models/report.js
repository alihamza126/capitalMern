const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    msg: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    },
    isRead: {
        type: Boolean,
        default: false,
        required: false
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;