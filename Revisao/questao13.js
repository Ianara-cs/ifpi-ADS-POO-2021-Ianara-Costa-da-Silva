const { saber_quantidade_de_vezesAparece } = require("./modularizacao")

const input = require("prompt-sync")()

function main(){
    const n = Number(input("Coloque um número inteiro: "))
    let d = Number(input("Coloque um número inteiro entre 1 e 9: "))

    while(d < 1 || d > 9){
        d = Number(input("Coloque um número inteiro entre 1 e 9: "))
    }

    console.log(saber_quantidade_de_vezesAparece(n, d))

}

main()