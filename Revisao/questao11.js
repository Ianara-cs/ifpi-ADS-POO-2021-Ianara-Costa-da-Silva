const { saberPorcentagem_P_de_X } = require("./modularizacao")


function main(){
   let x = 120
   let p = 50
   console.log(`${saberPorcentagem_P_de_X(p, x).toFixed(1)}%`)
}

main()