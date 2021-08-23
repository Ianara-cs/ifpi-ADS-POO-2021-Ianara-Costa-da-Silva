const input = require("prompt-sync")()

function main(){

    const vetor = Array(20)
    let contador = 0
    
    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = Number(input(`${i+1}. Coloque um número inteiro: `))
        
        if(vetor[i] % 2 === 0){
            contador++
        } 
    }
    
    console.log(vetor)
    console.log("Quantidade de valores pares:", contador)
}

main()