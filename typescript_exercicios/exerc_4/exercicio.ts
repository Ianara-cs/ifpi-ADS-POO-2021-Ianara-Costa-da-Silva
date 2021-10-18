/* Questão 1
 Sim. Pois quando ela não é iniciada então ela não é encontrada.
*/

// Questão 2 

class Hotel {
    quantReservas : number;

    constructor(quantR : number){
        this.quantReservas = quantR
    }

    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);


/* Questão 3
 A classe contém um constructor que aceita um número como parametro então no momento de estanciar deveria chamar "new Radio"
  e passar um número como argumento. 
  
  class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
  }
  let r : Radio = new Radio();
  
  A solução é passa o número como argumento
  Ex: let r : Radio = new Radio(10);

*/

/* Questão 4
    a) O resultado será 90, pois c1 e c2 apontarão para o mesmo endereço em memória ou seja, apontarão para o mesmo objeto
    e quaisquer alteração em c1 e/ou c2 resultará na alteração de ambos;

    b) O objeto que era referenciado por c1 é perdido.

*/
/* Questão 5 */
class Jogador{
    forca : number 
    nivel : number 
    pontos_atuais : number 

    constructor(forc: number, nil: number, pt: number ){
        this.forca = forc
        this.nivel = nil 
        this.pontos_atuais = pt
    }

    calculaAtaque() : number{
        return this.pontos_atuais += this.forca * this.nivel
    }

    atacar(pontos_atuais : number): number {
        return this.pontos_atuais = this.pontos_atuais - pontos_atuais + this.calculaAtaque()
    }
}

let jogador1 : Jogador = new Jogador(1, 3, 5)
let jogador2 : Jogador = new Jogador(2, 4, 4)           
jogador1.calculaAtaque()
jogador2.calculaAtaque()

jogador2.atacar(jogador1.pontos_atuais)
jogador1.atacar(jogador2.pontos_atuais)

console.log("Jogador 1 = " + jogador1.pontos_atuais)  // 1
console.log("Jogador 2 = " + jogador2.pontos_atuais)  // 7

// Vencedor é o jogador 2


// Questão 6 

class Conta {
    numero: String;
    saldo: number;

    constructor(num:String, saldoInicial:number){           // COMPLETA
    this.numero = num;
    this.saldo = saldoInicial;
    }

    sacar(valor: number): boolean {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number) : boolean {
        if(this.sacar(valor) == true){
            contaDestino.depositar(valor)
            return true
        }
        return false
    }
}

let c1 = new Conta("1", 1000);
let c2 = new Conta("2", 0);
c1.sacar(920)  // Deu certo sacar a quantidade solicitada 
console.log(c1.consultarSaldo())   // A conta c1 tem agora 80 reais

c1.depositar(25);  // Foi depositado 25 reais na conta c1 passando a ter 105 reais
c2.depositar(200); // Na conta c2 foi depositado 200 reais 
c2.depositar(40)  // Na conta c2 foi depositado mais 40 reais passando a ter 240
c1.transferir(c2, 20)   // Foi transferindo 20 reais da conta c1 para a conta c2 
console.log("C1 = " + c1.consultarSaldo());  // 85 reais
console.log("C2 = " + c2.consultarSaldo());  // 260 reais
c1.transferir(c2, 90) // Não deu certo a transferência, pois o sacar na conta c1 não foi satisfeito; 

// Questão 7

class Produto{
    codigo: number
    descricao : string
    valor : number
    quantidadeMinima : number = 0
    quantidadeProduto : number = 0
    
    constructor(cod: number, desc:string, val: number){                 // COMPLETA
        this.codigo = cod
        this.descricao = desc
        this.valor = val
    }

    baixar(quantidade: number) : number{
        this.quantidadeProduto -= quantidade
        if(this.quantidadeProduto >= this.quantidadeMinima ){
            return this.quantidadeProduto
        }else{
            return this.quantidadeProduto += quantidade
        }
    }

    repor(quantidade: number) : number{
        return (this.quantidadeProduto += quantidade)
    }

    reajusta(taxa: number) : number{
        return this.valor =(this.valor * taxa / 100) + this.valor
    }

    toString(){
        return console.log(`${this.descricao} Código do Produto: ${this.codigo}. Preço do produto: R$ ${this.valor.toFixed(2)}. Quantidade disponível do produto: ${this.quantidadeProduto}`)
    }

    equals(codigo : number): boolean{
        if(this.codigo == codigo){
            return true
        }else{
            return false
        }
    } 
}

let produtoA = new Produto( 1, "Confeccionado em material respirável, esse tênis para correr possui reforço no calcanhar para proteger contra possíveis torções e fechamento dinâmico, garantindo um ajuste personalizado.", 100)
let produtoB = new Produto( 1, "Confeccionado em material respirável, esse tênis para correr possui reforço no calcanhar para proteger contra possíveis torções e fechamento dinâmico, garantindo um ajuste personalizado.", 100)
let produtoC = new Produto( 2, "Resistente e confortável, essa chuteira de sação oferece ótima tração nas quadras e estabilidade superior, graças a camada de EVA na entressola.", 120)
produtoA.quantidadeProduto = 10
produtoC.quantidadeProduto = 20

produtoA.quantidadeMinima = 2

console.log(produtoA.baixar(9))  // Não foi Possível realizar a baixa, então a quantidade não mudou
console.log(produtoA.repor(9))   // A quantidade do produto aumentou mais 9
console.log(produtoA.baixar(7))  // Foi possível realizar a baixa

produtoA.reajusta(5)  // Produto custava R$ 100.00 como foi reajustado em 5% começou a custa R$ 105.00
produtoA.toString()
console.log(produtoA.equals(produtoB.codigo))  // true
console.log(produtoA.equals(produtoC.codigo))  // false
produtoC.toString()
