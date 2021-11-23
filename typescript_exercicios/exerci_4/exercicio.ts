// Questão 1

let numero: number[] = [2,4,6,8,10];
let som: number = 0

for (let i : number = 0; i < numero.length; i++) {
    som = som + numero[i]
}
console.log('Soma = '+ som)

// Questão 2
/* É declarado um array do tipo número e dentro do for será exibido cada elemento do array, mas na condição 
está assim "i <= a.length;" isso que dizer que será exibido undefined no último laço do for */


// Questão 3
let num : number[] = [0,9,2,3,7,5,4,6,8,1];

console.log(num.sort())
console.log(num.reverse())


// Questão 4
let str: string = 'Instituto Federal do Piauí';

console.log(str.toUpperCase())

console.log(str.charAt(9)) 

console.log(str.indexOf('o', 9)) 

console.log(str.split(' '))