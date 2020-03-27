const knex = require('knex'); // importar

const configuration = require('../../knexfile'); // importar configuraciones

const connection = knex(configuration.development); //utilizar configuración de desarrollo

module.exports = connection;