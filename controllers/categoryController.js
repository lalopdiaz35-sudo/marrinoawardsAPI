

const Category = require('../models/Category');


const getCategories = async (req, res) => {
    try {

        const categories = await Category.find({}); 
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor al obtener las categorías.' });
    }
};

module.exports = {
    getCategories
};