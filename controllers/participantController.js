

const Participant = require('../models/Participant');


const getParticipants = async (req, res) => {
    try {
        
        const participants = await Participant.find({}); 
        
        
        res.status(200).json(participants);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la lista de participantes' });
    }
};

module.exports = {
    getParticipants
};