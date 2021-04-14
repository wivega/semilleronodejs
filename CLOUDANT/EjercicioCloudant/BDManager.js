const Cloudant = require('@cloudant/cloudant');
const config = require('./config.json');
/*
cloudant = new Cloudant({
    url: 'https://9ee6246f-a67f-4c8b-84aa-243c5fb79508-bluemix.cloudantnosqldb.appdomain.cloud',
    plugins: { iamauth: { iamApiKey: 'oeVk63N3Ch77nlV0pwDSumBaccNAJSs-zMqGmq-6BLM0' } }
});
*/

cloudant = new Cloudant({
    url: `${config.BaseDatos.credentials.url}`,
    plugins: { iamauth: { iamApiKey: `${config.BaseDatos.credentials.apikey}` } }
});


db = cloudant.use(config.BaseDatos.dbname);


export function crearDocumento(objeto) {
    return new Promise((resolve, reject) => {
        db.insert(objeto, function (err, data) {
            if (err) {
                console.log('Fallo al insertar documento: ' + err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export function leerDocumento(docId) {
    return new Promise((resolve, reject) => {
        db.get(docId, function (err, data) {
            if (err) {
                console.log('Fallo al leer el documento: ' + err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export function actualizarDocumento(documento) {
    return new Promise((reject, resolve) => {
        console.log("Updating document 'mydoc'");
        // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo
        doc.c = true;
        db.insert(doc, function (err, data) {
            // conservar la revisión de la actualización para que podamos suprimirla
            doc._rev = data.rev;
            callback(err, data);
        });
    })
}

export function eliminarDocumento(documento) {
    return new Promise((resolve, reject) => {
        db.destroy(doc._id, doc._rev, function (err, data) {
            if (err) {
                console.log('Fallo al eliminar el documento: ' + err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

