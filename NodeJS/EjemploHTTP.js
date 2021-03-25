const http = require('http');   // Usar HTTPS si se tiene un certificado
const url = require('url');     // Para analizar URLs
const path3 = require('path');   // Para manipular rutas de sistemas de archivos
const fs5 = require('fs');      // Para leer archivos

function serve(rootDirectory, port) {
    let server = new http.Server();     // Se crea un nuevo servidor http
    server.listen(port);                // Escucha en el puerto especificado
    console.log(`Listening on port: ${port}`);

    server.on("request", (request, response) => {        // Cuando lleguen solicitudes las manipulamos con esta función
        let endpoint = url.parse(request.url).pathname;     // Obtiene la ruta de la url que trae la solicitud. 
        // Se ignora los parametros de consulta que se le agreguen
        if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(200);                        //Especifica el código de estado de la respuesta (200 = Ok)
            response.write(`${request.method} ${request.url} HTTP/${    //Esto es el cuerpo de la respuesta
                request.httpVersion
                }\r\n`);
            let headers = request.rawHeaders;
            for (let i = 0; i < headers.length; i += 2) {
                response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
            }
            response.write("\r\n");                         // Se finalizan los headers con una línea en blanco.
            request.pipe(response);                         // Copiamos cualquier cuerpo del request al cuerpo del response, dado que ambos son flujos.
        //}else if(endpoint ==='/test/file'){
        }else {
            let fileName = '';
            console.log('fileName: '+fileName);
            fileName = fileName.replace(/\.\.\\/g,"");
                      // No va permitir ../ dentro
            fileName= path3.resolve(rootDirectory,fileName);    // Convertimos una ruta relativa a una ruta absoluta
            let typeFile;
            switch (path3.extname(fileName)) {
                case '.html':
                case '.htm':
                    typeFile = 'text/html';
                    break;
                case '.js':
                    typeFile = 'text/javascript';
                    break;
                case '.css':
                    typeFile = 'text/css';
                    break;
                case '.png':
                        typeFile = 'image/png';
                        break;
                case '.txt':
                        typeFile = 'text/plain';
                        break;
                default:
                    typeFile = 'application/octet-stream';
                    break;
            }
            let stream = fs5.createReadStream(fileName);
            stream.once('readable',()=>{
                response.setHeader('Content-Type',typeFile);
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.on("error", err=>{
                response.setHeader('Content-Type',"text/plain; charset=UTF-8");
                response.end(err.message);
            });
        }
    });
}

serve(process.argv[2] || '/tmp', parseInt(process.argv[3]) || 8000);

