const express = require('express');
const connectDatabase = require('./src/database/db');
const professorRoute = require('./src/routes/professorRoute');
const usuarioRoute = require('./src/routes/usuarioRoute');
const cors = require('cors');

const swaggerRoute = require("./src/routes/swagger.route");
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());
  
app.use('/professores', professorRoute);
app.use('/usuarios', usuarioRoute);
app.use('/doc', swaggerRoute);

connectDatabase();
app.listen(port, () => {
    console.log(`App rodando na porta, ${port} 💻`);
});

module.exports = app;