/* QUESTÃO 11 */
function saberPorcentagem_P_de_X(p,x){
    return p / (x/100)
}

const input = require ("prompt-sync")()

// Questão 12
function receberMedidadeTempo_s(descrição){
    return Number(input(descrição))
}

function horarioConvertido(tempo){
    let horas = converterEm_Horas(tempo)
    let minutos = converterEm_Minutos(tempo)
    let segundos = converterEm_Segundos(tempo)
    return (horas+":"+minutos+":"+segundos)
}

function converterEm_Horas(tempo){
    return Math.trunc(tempo / 3600)
}

function converterEm_Minutos(tempo){
    return Math.trunc((tempo%3600) / 60)
}

function converterEm_Segundos(tempo){
    return Math.trunc((tempo%3600)%60)
}

// Questão 13
function saber_quantidade_de_vezesAparece(n, d){
    let string_n = n.toString()
    let string_d = d.toString()
    let caractere = ' '
    let contador = 0

    for(let i = 0; i < string_n.length; i++){
        caractere = string_n[i]
        if(caractere === string_d){
            contador++
        }
    }
    return contador
}

module.exports = {
    saberPorcentagem_P_de_X, receberMedidadeTempo_s, horarioConvertido, saber_quantidade_de_vezesAparece
}