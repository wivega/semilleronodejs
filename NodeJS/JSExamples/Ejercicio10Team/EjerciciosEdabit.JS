
/** 
 * Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
 * To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
 * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will 
 * be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
 * https://edabit.com/challenge/3kcrnpHk7krNZdnKK
 * @param decimal 
 * @returns 
 */
function binary(decimal){
    let decimalEnBinario = decimal.toString(2); // A la base 2
    return decimalEnBinario;  
}

/**
 * Triangular Number Sequence.
 * Write a function that gives the number of dots with its corresponding triangle number
 * of the sequence.
 * This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
 * The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15 This means that the first triangle has just one dot, 
 * the second one has three dots, the third one has 6 dots and so on. Write a function that gives the number of dots with its 
 * corresponding triangle number of the sequence.
 * https://edabit.com/challenge/RMZiERz2cbjmbXruY
 * @param n 
 * @returns 
 */
function triangle(n){
    return (n*(n+1))/2;
}

console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215));


/**
 * Get the Area of a Country:
 * Create a function that takes a country's name and its area as arguments and returns the area of the country's 
 * proportion of the total world's landmass.
 * https://edabit.com/challenge/ejfdLAp673DwxSg5R
 * @param name 
 * @param area 
 * @returns 
 */
function areaOfCountry(name, area){
    let porcentaje = `${name} is ${(area/148940000 * 100).toFixed(2)}% of the total world's landmass`;
    return porcentaje;
}

console.log(areaOfCountry("Russia",17098242));
console.log(areaOfCountry("USA",9372610));
console.log(areaOfCountry("Iran",1648195));
 


/**
 * Pentagonal Number.
 * Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center 
 * dot on the Nth iteration. In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. 
 * On the third, there are 16 dots, and on the fourth there are 31 dots.
 * https://edabit.com/challenge/wmdanmJkaT9waTg3y
 * 
 * @param num 
 * @returns 
 */

function pentagonal(num){
    return (5*(num*num) - 5*num +2)/2;
}

console.log(pentagonal(1));
console.log(pentagonal(2));
console.log(pentagonal(3));
console.log(pentagonal(8));

//Pentagonal Number (Alternative)
function pentagonalv2(num) {
    let puntos=1;
    while (num > 1) {
       puntos = puntos+((num-1)*5);
        num=num-1;
    }
    return puntos;	
}
let num=8;
console.log(pentagonal(num));

