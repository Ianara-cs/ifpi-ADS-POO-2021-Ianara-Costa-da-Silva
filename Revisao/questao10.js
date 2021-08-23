const input = require("prompt-sync")()

function main(){
    const frase = input("Frase: ")

    frase_sem_vogal(frase)
}

function eh_vogal(caractere){
    let code = caractere.charCodeAt(0)
    if(code === 65 || code === 97 || code === 69 || code === 101 || code === 73 || code === 105 || code === 79 || code === 111 || code === 85 || code === 117){
        return true
    }else{
        return false
    }
}

function frase_sem_vogal(frase){
    let nova_frase = ' '
    let caractere = ' '

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(eh_vogal(caractere)){
            continue
        }else{
            nova_frase += caractere
        }
    }
    console.log(nova_frase)
}

main()