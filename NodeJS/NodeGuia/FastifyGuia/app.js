const fastify = require('fastify')({logger: true});

fastify.get('/', async (request, response) => {
    return {message: 'Hola compañeros del fente 48'};
});

fastify.listen(9200, '127.0.1.1', (err, address) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});