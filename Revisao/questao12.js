const { receberMedidadeTempo_s, horarioConvertido } = require("./modularizacao");

function main(){
    let receber_segundos = receberMedidadeTempo_s("Coloque os segundos: ")

    console.log(horarioConvertido(receber_segundos))
}
main()