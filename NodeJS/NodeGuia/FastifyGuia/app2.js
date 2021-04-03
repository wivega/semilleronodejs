const path = require('path');
const fastify = require('fastify')({
    logger: {
      level: 'info',
      file: path.join(__dirname,"/logs/logs.log") 
    }
});

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
          name: { type: 'string' }
        },
        response: {
          200: {
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      },
      preHandler: async (request, response) => {
          console.log('Esta es una atenticación');
      },
      handler: async (request, response) => {
          request.log.info(`Un get a nuestro server ${new Date()}`);
          return {hello: 'hola desde el frente 50'};
      }
});

/*
fastify.get('/', async (request, response) => {
    return {message: 'Hola compañeros del fente 49'};
});
*/

const start = async () => {
    try {
        await fastify.listen(3001);
    }
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();