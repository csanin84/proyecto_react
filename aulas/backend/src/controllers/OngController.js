const crypto = require('crypto'); // para generar un id aleatorio
const connection = require('../database/connection'); // importar las configuraciones de conneccion

module.exports = {
    // listar ong
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    // crear una ong
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        // esperar hasta terminar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
   
        return response.json({ id });        
    }
};