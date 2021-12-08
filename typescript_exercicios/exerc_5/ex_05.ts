// Questão 1

class Calculadora {
	// A)
    private operador1 : number      
    private operador2 : number

	// C)
    constructor ( oper1 : number,  oper2 : number){
        this.operador1 = oper1
        this.operador2 = oper2
    }

	// B)
    soma(): number{
        return this.operador1 + this.operador2
    }

    multiplicacao(): number{
        return this.operador1 * this.operador2
    }
}

let ab = new Calculadora(3,7);

console.log(ab.soma())
console.log(ab.multiplicacao())

// Não dá certo acessar os atributos diretamente, pois eles estão privados.


// Questão 2

class Hora{

	// A)
    constructor(private hora:number, private minuto: number, private segundo: number){}

	// B)
    public horas(): number{
        return this.hora
    }
    public minutos(): number{
        return this.minuto
    }
    public segundos(): number{
        return this.segundo
    }

	// C)
    public horas_min_seg(){
        return (`${this.hora}:${this.minuto}:${this.segundo}`)
    }

}

let hr = new Hora(3,50,40)
console.log(hr.horas_min_seg())


// Questão 3
class Banco {
	private contas: Conta[] = [];           // Alterado
	
	inserir(conta: Conta): void {
        let indice = this.consultarPorIndice(conta.numero)
        if(indice == -1 ){  
		    this.contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta {
		let contaConsultada: Conta ;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {         // Alterado
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero : string, valor: number): void{
        let indice = this.consultarPorIndice(numero);

        if(indice != -1){
            this.contas[indice].sacar(valor); 
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredit_indice = this.consultarPorIndice(numeroCredito);
        let contaDebit_indice = this.consultarPorIndice(numeroDebito)  

        if(contaDebit_indice != -1 && contaCredit_indice != -1){
            this.contas[contaCredit_indice].transferir(this.contas[contaDebit_indice], valor)
        }
    }

    quant_Contas(): number{
        return this.contas.length
    }

    total_dinheiro(): number{
        let soma = 0
        for (let i: number = 0; i < this.contas.length; i++) {
			soma += this.contas[i].saldo
		}
        return soma
    }

    media_Saldo() : number{
        let media = this.total_dinheiro() / this.quant_Contas()
        return media
    }
}


// Questão 4
// A)
class Conta {
	private _numero: string;        // Privado
	private _saldo: number;         // Privado

	constructor(numero: string, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

    get saldo(): number{            // get para leitura
        return this._saldo          // get para leitura
    }

    get numero(): string{
        return this._numero
    }

	sacar(valor: number): void {
		this._saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this._saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

/* B) A implementação da classe Banco e os testes precisaram serem
    adaptados para ter métodos de leitura e escrita.
*/