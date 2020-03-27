
const express = require('express'); // importar express

const ongController = require('./controllers/OngController'); // importar controller de Ong
const incidentController = require('./controllers/IncidentController'); // importar controller de incidents
const profileController = require('./controllers/ProfileController'); // importar controller de profiles
const sessionController = require('./controllers/SessionController'); // importar controller de login

const routes = express.Router(); // crear una instancia de la clase Router para desacoplar las rutas 

// SESSIONS
routes.post('/session', sessionController.create);

// ONGS
routes.get('/ongs', ongController.index); // get listar ongs
routes.post('/ongs', ongController.create);// post criar ong

// INCIDENTS
routes.get('/incidents', incidentController.index); // post listar incident
routes.post('/incidents', incidentController.create); // post crear incident
routes.delete('/incidents/:id', incidentController.delete); // post eliminar incident

// PROFILES
routes.get('/profile', profileController.index); // post eliminar incident

// exportar rutas
module.exports = routes;