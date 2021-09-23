const mongoose = require('mongoose');
const dbConection = async() => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass  
        //String de conexion:  mongodb+srv://adminproject:CQ2bEywh62BXc7Yu@cluster0.2bzij.mongodb.net/proyectosDB
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
module.exports = {
    dbConection
}