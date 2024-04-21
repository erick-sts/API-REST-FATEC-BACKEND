const express = require('express');
const connectDatabase = require('./src/database/db');
const professorRoute = require('./src/routes/professorRoute');
const usuarioRoute = require('./src/routes/usuarioRoute');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200'
  }));
  
app.use('/professores', professorRoute);
app.use('/usuarios', usuarioRoute);

connectDatabase();
app.listen(port, () => {
    console.log(`App rodando na porta ${port} 💻`);
});

module.exports = app;