function soma(x: number, y: any): number {
    return x + y
}

console.log(soma(1, 2));
// 2
console.log(soma(1, "2"));
// 12
console.log(soma(1));
// Não é execultado pois não foi fornecido um argumento para 'y'. (NaN)
