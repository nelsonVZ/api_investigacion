const express = require('express'); //de esta forma se importa modulos en node.js
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');

//Creando el servidor express
const app = express();

//Estableciendo la configuracion de cors
app.use(cors());
app.use(express.json());
//Lectura y parseo del body


//Verificando variables de entorno
//console.log(process.env);
//Crear la conexion a la DB
dbConection();

//Rutas de la API
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.route'));
//app.use('/api/investigadores', require('./routes/investigadores.routes'));


//Para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor Node.js desplegado en el puerto ' + process.env.PORT)
})

/*
USUARIO DE MONGODB COMPASS
adminproject
CQ2bEywh62BXc7Yu 
*/