/**
 * Start server with hapi
 * 1 - Create folder to work
 * 2 - Navigate to folder and run npm init
 * 3 - Run npm install @hapi/hapi
 */
'use strict';

const Hapi = require('@hapi/hapi');
const init = async () => {
    const server  = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    server.route({
        method: 'GET',// allow an Array or * for all HTTP methods
        path: '/',// can contain parameters
        handler: (request, h) => {// Business logic, can return promise, value or throw error
            return 'Hello World With Hapi!!!';
        }
    });

    server.route({
        method: 'GET',// allow an Array or * for all HTTP methods
        path: '/hello',// can contain parameters
        handler: (request, h) => {// Business logic, can return promise, value or throw error
            return 'Hello World from Hapi path!!!';
        }
    });

    server.route({
        method: 'GET',// allow an Array or * for all HTTP methods
        path: '/hello/{name}',// can contain parameters
        handler: (request, h) => {// Business logic, can return promise, value or throw error
            return `Hello ${request.params.name.toUpperCase()}, Hapi can handle params`;
        }
    });

    // using h param, is a response toolkit
    server.route({
        method: 'GET',
        path: '/using-h',
        handler: (request, h) => {
            return h.redirect('/');
        }
    });

    // response a json object
    server.route({
        method: 'GET',
        path: '/user',
        handler: (request, h) => {
            return {
                firstName: 'Miguel',
                lastName: 'Blanco',
                age: 25,
                uid: 'Af23tYp0987BXE'
            };
        }
    });

    /**
     * Puntos de extensión Extensiones
     * onRequest, onPreAuth, onCredentials, onPostAuth, onPreHandler, onPostHandler, onPreResponse
     */
    server.ext('onRequest', (request, h) => {// esto se ejecutara antes de cada petición al servidor
        console.log('Before Request');
        return h.continue;
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

init();