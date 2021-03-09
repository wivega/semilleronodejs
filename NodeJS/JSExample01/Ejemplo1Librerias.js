/*
 * Ejemplo 1 de las librerias de javascritp: Set
 */
let colores = new Set();
class Colores {
    

    add(color){
        console.log(colores.has(color) 
        ? 'Ya existe ese Conjunto de colores en el Conjunto de colores.':'Se agrega '
        +color+' al Conjunto de colores.');
        colores.add(color);
    }

    delete(color){
        if(colores.has(color)){
            colores.delete(color);
        }else{
            console.log('No existe '+color+' en el Conjunto de colores.');
        }
        
    }
}

let colColors = new Colores();
colColors.add('amarillo');
colColors.add('rojo');
colColors.add('verde');
colColors.add('azul');
colColors.add('rojo');



