
const mongoose = require('mongoose');

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });

        console.log(`📡 MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`🚨 Error de Conexión a MongoDB: ${error.message}`);
        throw error; 
    }
};

module.exports = { connectDB };