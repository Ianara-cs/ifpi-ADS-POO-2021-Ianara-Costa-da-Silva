// Letra A
let a = 10;
a = "2";
/* Não compilou porque a variável "a" é do tipo number, então ao colocar um outro valor nessa variável tem que ser
 do tipo number. Nesse exemplo o valor foi 2 mas em forma de string pois está entre aspas. 
*/

// Letra B
let b: any = 10;
b = 2;
/* Copilou pois a variável é do tipo any, no qual pode atribuir qualquer tipo de valor */

// Letra C
let c : number = 10;
c = 2;
/* Copilou pois a variável é do tipo number e ao atribuir outro valor foi do tipo number. */
