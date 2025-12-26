require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); 

const voteRoutes = require('./routes/voteRoutes');
const participantRoutes = require('./routes/participantRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const resultsRoutes = require('./routes/resultsRoutes'); 

const app = express(); 

// Conectar a la base de datos
connectDB(); 

app.use(express.json());
app.use(cors());

// Ruta de prueba
app.get('/api/saludo', (req, res) => {
    res.json({ message: "¡API Marrinos Awards funcionando!" });
});

// Rutas de la API
app.use('/api/votos', voteRoutes);
app.use('/api/participantes', participantRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/resultados', resultsRoutes);

// --- CAMBIOS PARA VERCEL ---

// 1. EXPORTAR la app (Vercel la usará como una función)
module.exports = app;

// 2. Solo arrancar el servidor con listen si NO estamos en producción (Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo localmente en el puerto ${PORT}`);
    });
}