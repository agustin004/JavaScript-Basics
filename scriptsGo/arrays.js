const array1 = [];
const array2 = [1, true, 'Hola', [1,2,3,4, ['a','b']]];

console.log(array2) // [ 1, true, 'Hola', [ 1, 2, 3, 4, [ 'a', 'b' ] ] ]

//Lenght is 4
console.log(`Lenght array2 => ${array2.length}`); // 4

//One value inside the array
console.log(`Value 2 => ${array2[2]}`); // Hola

//Other example for create arrays
const array3 = Array.of('A','B','C');
console.log(`Array values -> ${array3}`); // A,B,C


//Fill -> Iniciaition of a array with predeterminate values.
const arregloD = Array(5).fill('GO');
console.log(`Array D con valores llenados por Fill -> ${arregloD}`); // GO,GO,GO,GO,GO


//Metodos generalmente usados para modificar un arreglo
const names = ['Garrito', 'Ferra', 'Drioler'];
console.log(`Names => ${names}`); // Garrito,Ferra,Drioler

//Push -> Add new element inside the array
names.push('Sito');
console.log(`New element in the array, hello sito => ${names}`); // Garrito,Ferra,Drioler,Sito


//Pop -> Delete the last element in the array
names.pop();
console.log(`Delete the last element in the array, bye sito => ${names}`); // Garrito,Ferra,Drioler

//Unshift -> Add element in the start of the array
names.unshift('Pardo');
console.log(`New element in the start of array, hello pardo => ${names}`); // Pardo,Garrito,Ferra,Drioler

//Shift -> Delete the first element in the array
names.shift();
console.log(`Delete the first element in the array, bye pardo => ${names}`); // Garrito,Ferra,Drioler

//indexOf -> Encontrar la posicion del elemento de un array.
names.push('B1lardo');
names.unshift('Piyuel');
console.log(`New Array -> ${names}`); // Piyuel,Garrito,Ferra,Drioler,B1lardo
console.log('Index of, looking for B1lardo -> ' +names.indexOf('B1lardo')); // 4


//splice -> Eliminar un elemento unico*. Se envian dos parametros (posicion, cantidad de elementos a borrar). Para que sea solo 1 en especifico, posicion y 1 para que solo se elimine un elemento.
names.splice(2,1);
console.log(`Result after unshift from the position 2, 1 element -> ` + names); // Piyuel,Garrito,Drioler,B1lardo

//!! splice tambien puede devolver un array de elementos eliminados, y se pueden almacenar en una variable.
console.log(`Resulting Array -> ${names}`);
const nombresEliminados = names.splice(2,2);

console.log('Restantes Array Nombres -> ' + names); // Piyuel,Garrito
console.log('Nuevo Array de Eliminados-> ' + nombresEliminados); // Drioler,B1lardo

//Slice -> Copia un array
const copiaNombres = names.slice();
console.log('Copia del array usando Slice -> ' + copiaNombres); // Piyuel,Garrito

//Filter -> Crea un array con todos los elementos que cumplan una condicion
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter(word => word.length > 6);
console.log(`Creacion de arreglo nuevo con los elementos que tuvieran un lenght superior a 6 -> ${results}`);

//Map -> Crea un nuevo array con los resultados de una funcion indicada aplicados a cada uno de sus elementos
const numbersToBeSum = [1,5,10,15];
const numbersAlredySum = numbersToBeSum.map(function (number){
    return number + 2; 
});

console.log(`Numbers + 2 -> ${numbersAlredySum}`) // 3,7,12,17

//Reverse -> invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const reversedArray = numbersToBeSum.reverse();
console.log(`Arreglo invertido -> ${reversedArray}`); // 15,10,5,1

console.log('For Each Example with Numbers to Be sum: ') // 

//For Each
numbersToBeSum.forEach(function (element, index){
    console.log('ID: '+ index + " - Value: " + element);
});