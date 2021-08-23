const input = require("prompt-sync")()

function main(){

    const vetor = Array(5)
    
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Coloque um número: "))
    }
    
    console.log(vetor)
}

main()

