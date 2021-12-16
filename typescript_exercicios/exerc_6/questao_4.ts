class Conta {
	private _numero: string;        
	private _saldo: number;         

	constructor(numero: string, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

    get saldo(): number{            
        return this._saldo          
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

class Poupanca extends Conta{
    private _taxaJuros: number
    
    constructor(numero:string, saldo: number, taxaJuros: number ){
        super(numero, saldo)
        this._taxaJuros = taxaJuros
    }

    public renderJuros(){
        this.depositar(this.saldo * this._taxaJuros/100)
    }

    get taxaJuros(): number{
        return this._taxaJuros
    }
}



class Banco {
	private contas: Conta[] = [];          
	
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

	private consultarPorIndice(numero: String): number {         
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

    rederJuros(numero: string){
        let contaConsultada = this.consultar(numero)
        if(contaConsultada instanceof Poupanca){
            let poupanca: Poupanca = <Poupanca> contaConsultada   // Alteração
            poupanca.renderJuros()
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

let banco : Banco = new Banco()

banco.inserir(new Conta("555", 200))
banco.inserir(new Poupanca("999", 300, 1))
banco.renderJuros("999")
console.log(banco.consultar("999").saldo)
banco.renderJuros("555")
console.log(banco.consultar("555").saldo)