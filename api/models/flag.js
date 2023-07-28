//Crear Schema para mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flagSchema = new Schema({
    id : String,
    pais: String,
    description: String,
    img: String
    
})


const flag = mongoose.model('flag', flagSchema);

module.exports = flag;