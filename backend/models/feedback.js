const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    createAt: { type: Date, default: Date.now() }
}, {
    timestamps: true,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;