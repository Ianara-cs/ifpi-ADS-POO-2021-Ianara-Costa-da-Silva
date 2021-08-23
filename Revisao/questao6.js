const input = require("prompt-sync")()

function main(){

    const inicio_de_sequencia = Number(input("Coloque um número para iniciar uma sequência: "))
    let numero = inicio_de_sequencia
    let soma = 0
    
    if(numero < -1){
        while(numero <= -1){
    
            if(numero != -1){
                soma += numero
            }
            console.log(numero)
            numero++
        }
        const media = soma / (-inicio_de_sequencia - 1) // -1 pois o -1 não conta
        console.log("A média aritmética dessa sequência é:", media)
    }else{
        while(numero >= -1){
        
            if(numero != -1){
                soma += numero
            }
            numero--
            console.log(numero)
        }
        const media = soma / (inicio_de_sequencia + 1) // +1 por causa do zero na sequência
        console.log("A média aritmética dessa sequência é:", media)
    }
}
main()