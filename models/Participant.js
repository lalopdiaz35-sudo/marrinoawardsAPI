

const mongoose = require('mongoose');

const participantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
            unique: true,
        },
        occupation: {
            type: String,
        },
        specialAbility: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: true,
        },
       
    },
    {
        timestamps: true, 
    }
);

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;