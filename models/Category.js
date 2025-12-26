

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre de la categoría es obligatorio'],
            unique: true,
        },
        description: {
            type: String,
            required: false,
        },
        
        imageUrl: {
            type: String,
            required: false, 
        }
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;