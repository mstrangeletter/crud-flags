const express = require('express');
const flags = require('./flag.controler')
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', flags.list)
app.post('/', flags.create)
app.get('/:id', flags.get)
app.put('/:id', flags.update)
app.patch('/:id', flags.update)
app.delete('/:id', flags.destroy)

app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

app.post('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

// //importo enrutador hacia flags
// const flagsRouter = require('./router/flags');
// //importo enrutador desde routes
// const routesRouter = require('./router/routes');

// Conexión a base de datos en MongoDB con Mongoose
const usuario = 'flagDB';
const password = 'rB1KDy6MdJf70Svm';
const uri = `mongodb+srv://${usuario}:${password}@cluster0.qy7tjlr.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));

// // Configuración de enrutadores
// app.use('/flags', flagsRouter);
// app.use('/', routesRouter);

// Por buenas prácticas configuro la carpeta para archivos estáticos
app.use(express.static(__dirname + "/public"));

// el servidor se inicia y comienza a escuchar las solicitudes en el puerto 3000
app.listen(port, () => {
  console.log('Servidor a su servicio en puerto', port);
});
