function main(){

    var valor_do_dolar = 5.42
    var valor_para_converter = 150
    
    var valor_convertido = valor_do_dolar * valor_para_converter
    
    console.log("Conversão do dólar para real: \n-----------------------")
    console.log(` $${valor_para_converter.toFixed(2)} é equivalente a R$${valor_convertido.toFixed(2)}`)
}
main()