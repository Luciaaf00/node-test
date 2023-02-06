const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    edad: String,
    descripcion: String,
    medallas:String
})

//Creamos el modelo
//no se pone el nombre de la base de datos es más bien un nombre de la descripción
const Entrenador = mongoose.model('bdentrenador', entrenadorSchema, "entrenador");

module.exports = Entrenador;