
const express = require('express'); // importar express
const cors = require('cors'); //modulo de seguridad
const routes = require('./routes') // importar rutas = ./(porque es un archivo no un paquete)

const app = express(); // instanciar un objeto express

app.use(cors);
app.use(express.json()); // utilizar formato json
app.use(routes); // para poder usar la rutas


app.listen(3333);