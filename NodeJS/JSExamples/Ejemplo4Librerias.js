/*
- Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
- A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, 
  sino extraer determinadas partes de él. Por ejemplo, si una fecha está en el 
  formato "27/11/2012" puede interesarnos extraer los números. Una expresión regular que 
  vale para esta cadena puede ser
- Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en 
  javascript. Del archivo pdf.
- Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
- Programe una expresión regular que de este texto   "papa tururú" obtenga ["papa", "pa"]
- Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
- Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
- Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
- ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
- Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
 *
 */

//--------------------------------------------------------------------------------------------------------
//- Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
let wordPunto1 = "BIFURCACION";
let regexp1 = /[^AEIOU]/g;
console.log(wordPunto1.match(regexp1));
/*- A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, 
  sino extraer determinadas partes de él. Por ejemplo, si una fecha está en el 
  formato "27/11/2012" puede interesarnos extraer los números. Una expresión regular que 
  vale para esta cadena puede ser
*/
let wordPunto2 = "27/11/2012"; 
let regexp2= /\d+/g;
console.log(wordPunto2.match(regexp2));
/*
- Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en 
  javascript. Del archivo pdf.
*/

function intercambio(arr, izqI, derI){
	let tmp = arr[izqI];
	arr[izqI] = arr[derI];
	arr[derI] = tmp;
}

function part(arr, izq, der) {
	let pivot = arr[Math.floor((der+izq)/2)];
	i = izq;
	j = der;
	while(i <= j){
		while(arr[i] < pivot){
			i++;
		}
		while (arr[j] > pivot) {
            j--;
        }
		if(i <= j) {
			intercambio(arr,i,j);
			i++;
			j--;
		}
	}
	return i;
}

function algoritmoQS(arr, izq, der){
	let idx;
	if(arr.length > 1){
		idx = part(arr,izq,der);
		if(izq < idx -1){
			algoritmoQS(arr, izq, idx-1);
		}
		if(idx < der){
			algoritmoQS(arr,idx,der);
		}
	}
	return arr;
}

let array1 = new Uint8Array(9);
for(i=0;i<array1.length;i++){
    array1[i] = Math.random()*10 + 1;
}
console.log(array1);
array1.forEach((idx) => {
    console.log(idx);
});

array2=algoritmoQS(array1,0,array1.length-1);

array2.forEach((idx)=> {
    console.log(idx);
});
//- Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
let wordPunto3 = "'hola tu' 12 tururú";  
let regexp3= /\u0027{1}|hola tu/gu;
console.log(wordPunto3.match(regexp3));

//- Programe una expresión regular que de este texto   "papa tururú" obtenga ["papa", "pa"]
let wordPunto4 ="papa tururú";
let regexp4= /pa/g;
console.log(wordPunto4.match(regexp4));

// - Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
let wordPunto5 ="java es güay";
let regexp5= /\w{4}/g;
let regexp5a= /java/g;
console.log(wordPunto5.match(regexp5));
//- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
let wordPunto6 ="11 millas 10 km";
let regexp6a= /10/g;
let regexp6= /\d{2}(?= km)/g;
console.log(wordPunto6.match(regexp6));
//- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
let wordPunto7 ="11 millas 10 km";
let regexp7= /\w+ km/g;
console.log(wordPunto7.match(regexp7));
//- Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
let wordPunto8 ="11.22";
let regexp8= /(?<=\.)\d+/g;
console.log(wordPunto8.match(regexp8));
//- Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
let wordPunto9 ="11 km 12 km 14 m";
let regexp9= /\d+(?= m)/g;
console.log(wordPunto9.match(regexp9));
//- ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
//   R/ Porque la expr. reg. busca exactamente la palabra HOLA, para arreglarlo, hay que 
//      poner la bandera i para que también distinga minúsculas. 
let wordPunto10 = "hola";
let regexp10 = /HOLA/ig;
console.log(wordPunto10.match(regexp10));
//- Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
let wordPunto11 = "hola\ntu";
let regexp11 = /\w+$/ig;
console.log(wordPunto11.match(regexp11));