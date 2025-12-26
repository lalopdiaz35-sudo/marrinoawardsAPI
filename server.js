require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); 

const voteRoutes = require('./routes/voteRoutes');
const participantRoutes = require('./routes/participantRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const resultsRoutes = require('./routes/resultsRoutes'); 

const app = express(); 

connectDB(); 

app.use(express.json());
app.use(cors());

app.get('/api/saludo', (req, res) => {
    res.json({ message: "¡API Marrinos Awards funcionando!" });
});

app.use('/api/votos', voteRoutes);
app.use('/api/participantes', participantRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/resultados', resultsRoutes);


module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo localmente en el puerto ${PORT}`);
    });
}