const input = require("prompt-sync")()

function main(){

    const valor1 = Number(input("Valor 1: "))
    const valor2 = Number(input("Valor 2: "))
    const valor3 = Number(input("Valor 3: "))
    
    let menor_valor = valor1
    
    if(valor2 < menor_valor){
        menor_valor = valor2
    }else if(valor3 < menor_valor){
        menor_valor = valor3
    }
    
    console.log("Menor valor é", menor_valor)
}
main()