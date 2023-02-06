const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetosSchema = new Schema({
    objeto: String,
    categoria: String,
    descripcion: String
})

//Creamos el modelo
//no se pone el nombre de la base de datos es más bien un nombre de la descripción
const Objetos = mongoose.model('bdobjetos', objetosSchema, "objetos");

module.exports = Objetos;