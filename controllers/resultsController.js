const Vote = require('../models/Vote');

exports.getResults = async (req, res) => {
    try {
        const results = await Vote.aggregate([
            {
                $project: {
                    voteArray: { $objectToArray: "$votes" }
                }
            },
            
            {
                $unwind: "$voteArray"
            },
            
            {
                $group: {
                    _id: {
                        categoryId: "$voteArray.k",
                        participantId: "$voteArray.v"
                    },
                    count: { $sum: 1 }
                }
            },
            
            {
                $sort: { "count": -1 } 
            }
        ]);
        
        res.json(results);

    } catch (error) {
        console.error("Error al calcular los resultados:", error);
        res.status(500).json({ message: 'Error interno del servidor al calcular los resultados.' });
    }
};