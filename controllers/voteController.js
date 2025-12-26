const Vote = require('../models/Vote');

exports.submitVotes = async (req, res) => {
    const { email, votes } = req.body;

    if (!email || !votes || Object.keys(votes).length === 0) {
        return res.status(400).json({ message: 'Datos incompletos. Se requieren email y votos.' });
    }

    try {
        const existingVote = await Vote.findOne({ email });
        
        if (existingVote) {
            return res.status(409).json({ message: 'El correo electrónico ya ha emitido su voto.' });
        }

        const newVote = new Vote({
            email,
            votes,
        });

        const savedVote = await newVote.save();

        return res.status(201).json({ 
            message: 'Votos guardados exitosamente', 
            voteId: savedVote._id,
            email: savedVote.email
        });

    } catch (error) {
        console.error("Error al guardar el voto:", error);
        return res.status(500).json({ message: 'Error interno del servidor al procesar el voto.' });
    }
};

