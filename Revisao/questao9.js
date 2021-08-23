const input = require("prompt-sync")()

function main(){
    const string_s = input("Frase: ")
    const caractere_a = "a"
    const caractere_b = "b"

    console.log(substituicao(string_s, caractere_a, caractere_b))
}

function substituicao(string, carac_a, carac_b){
    let nova_frase = ''
    let caractere = ''
    for(let i = 0; i < string.length; i++){
        caractere = string[i]
        if(caractere === carac_a){
            nova_frase += carac_b
        }else{
            nova_frase += caractere
        }
    }
    return nova_frase
}

main()