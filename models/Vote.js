const mongoose = require('mongoose');

const VotesMapSchema = new mongoose.Schema(
    {}, 
    { strict: false, _id: false }
);

const VoteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    votes: {
        type: VotesMapSchema,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Vote', VoteSchema);