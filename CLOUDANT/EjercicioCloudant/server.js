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


function crearDocumento(objeto) {
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

function leerDocumento(docId) {
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

function actualizarDocumento(documento) {
    return new Promise((reject, resolve) => {
        // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo
        documento.c = true;
        db.insert(documento, function (err, data) {
            // conservar la revisión de la actualización para que podamos suprimirla
            if(err){
                console.log('Fallo al actualizar el documento: ' + err);
                reject(err);
            }else{
                documento._rev = data.rev;
                resolve(data);
            }
        });
    })
}

function eliminarDocumento(documento) {
    return new Promise((resolve, reject) => {
        db.destroy(documento._id, documento._rev, function (err, data) {
            if (err) {
                console.log('Fallo al eliminar el documento: ' + err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

//------------------------------------------------------------------------------------------------------------------------------------------------
//Usar funciones
//------------------------------------------------------------------------------------------------------------------------------------------------

let documento = {
    "_id": "doc_3",
    "first_name": "New_Name 2",
    "last_name": "New_lastName 2",
    "age": "30",
    "location": "India"
};


crearDocumento(documento).then(docCreated => console.log('Se ha creado el documento!: ' + docCreated)).catch(err => console.log(err));

let docId = 'doc_3'
let documento_Leido;

leerDocumento(docId).then(docReaded => {
    console.log('Se ha leido el siguiente documento');
    documento_Leido = docReaded;
    console.log(documento_Leido);
}).catch(err => console.log(err));


//Actualizar documento
leerDocumento(docId).then(docReaded => {
    docReaded.last_name ="New Last Name";
    docReaded.age = "20";
    docReaded.location = "New York";
    actualizarDocumento(docReaded).then(docUpdated=>{
        console.log('Documento Actualizado!');
        console.log(docUpdated);
    }).catch(err=>console.log(err));
}).catch(err => console.log(err));


//Eliminar documento
leerDocumento(docId).then(docReaded => {
    eliminarDocumento(docReaded).then(docUpdated=>{
        console.log('Documento Eliminado!');
        console.log(docUpdated);
    }).catch(err=>console.log(err));
}).catch(err => console.log(err));






/*
var createDocument = function (objeto, callback) {
    console.log("Creating document ");
    // especificar el ID del documento para que pueda actualizarlo y suprimirlo posteriormente
    db.insert(objeto, function (err, data) {
        callback(err, data);
    });
};

var readDocument = function (docId, callback) {
    console.log("Reading document 'mydoc'");
    db.get(docId, function (err, data) {
        // conservar una copia del documento para que conozca su señal de revisión
        doc = data;
        callback(doc, err, data);
    });
};

var updateDocument = function (doc, callback) {
    console.log("Updating document 'mydoc'");
    // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo
    doc.c = true;
    db.insert(doc, function (err, data) {
        // conservar la revisión de la actualización para que podamos suprimirla
        doc._rev = data.rev;
        callback(err, data);
    });
};

var deleteDocument = function (doc, callback) {
    console.log("Deleting document 'mydoc'");
    // proporcionar el ID y revisión que se debe suprimir
    db.destroy(doc._id, doc._rev, function (err, data) {
        callback(err, data);
    });
}

let objeto2 = {
    "_id": "doc_3",
    "first_name": "New_Name",
    "last_name": "New_lastName",
    "age": "30",
    "location": "USA"
};

//------------------------------------------Operaciones

let documento = {
    "_id": "doc_3",
    "first_name": "New_Name 2",
    "last_name": "New_lastName 2",
    "age": "30",
    "location": "India"
};

crearDocumento(documento).then((err, datos) => {
    console.log('Documento creado!');
    console.log(documento);
}).catch(err => console.log(err));


/*
createDocument(documento, (datos, err) => {
    if (err) {
        console.log('viene de crear documento!!!');
        console.log(err);
    }
    console.log('datos creados!');
    console.log(datos);
});


readDocument('doc_3', (datos, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('lee datos para luego actualizarlos');
        console.log(datos);
        documento = datos;
    }
});

updateDocument(documento, (datos, err) => {
    if (err) {
        console.log(err);
    }
    console.log('Datos Actualizados: ' + datos);
});
*/