//Requiere el framework y lo inicializa
const fasty = require('fastify')({ logger: true })

//Declara una routa
fasty.get('/', async (request, reply) => {
    return { hello: 'World' }
})


//Ejecutar el servidor!
const start = async () => {
    try {
        await fasty.listen(3000)
    } catch (err) {
        fasty.log.error(err);
        process.exit(1);
    }
}
start()