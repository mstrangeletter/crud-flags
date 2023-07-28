// Conexión a base de datos en MongoDB con Mongoose
const mongoose = require('mongoose');

const usuario = 'flagDB';
const password = 'rB1KDy6MdJf70Svm';
const uri = `mongodb+srv://${usuario}:${password}@cluster0.qy7tjlr.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e));


const Flag = mongoose.model('Flag', {
    pais: String,
    description: String,
    img: String
})

const crear = async() => {
    const flag = new Flag({
        pais: "Cuba",
        description: "República de Cuba",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
    })
    const savedflag = await flag.save()
    console.log(savedflag);
}
//pendiente: revisar permisos de adm en mongo db por error al momento de realizar la creación de estos campos 
 crear();