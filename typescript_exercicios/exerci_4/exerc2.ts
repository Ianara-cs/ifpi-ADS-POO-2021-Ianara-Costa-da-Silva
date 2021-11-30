/* Questão 1
A) - VERDADEIRO
B) - FALSO
C) - VERDADEIRO
D) - VERDADEIRO
E) - VERDADEIRO
F) - VERDADEIRO
G) - VERDADEIRO
H) - VERDADEIRO
*/

// Questão 2

class Triangulo{
    a: number;
    b: number;
    c: number;

    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    eh_triangulo() :boolean{
        
        if((Math.abs(this.b - this.c) < this.a && this.b + this.c > this.a) && (Math.abs(this.a - this.c) < this.b && this.a + this.c > this.b) && (Math.abs(this.a - this.b) < this.c && this.a + this.b > this.c)){
            return true
        }
        return false;
    }

    ehIsoceles() :boolean{
        if(this.eh_triangulo() == false){
            return false
        }else if (this.a == this.b && this.a != this.c){
            return true
        }else if(this.a == this.c && this.a != this.b){
            return true
        }else if(this.c == this.b && this.c != this.a){
            return true
        }else{
            return false
        } 
    }

    ehEquilatero() :boolean{
        if(this.eh_triangulo() == false){
            return false
        }else if (this.a == this.b && this.a == this.c){
            return true
        }else{
            return false
        }
    }

    ehEscaleto() :boolean{
        if(this.eh_triangulo() == false){
            return false
        }else if (this.a != this.b && this.a != this.c && this.c != this.b){
            return true
        }else{
            return false
        }
    }
}

let tri1 : Triangulo = new Triangulo(4,5,8)
console.log(tri1.eh_triangulo())
console.log(tri1.ehIsoceles())
console.log(tri1.ehEquilatero())
console.log(tri1.ehEscaleto())


// Questão 3


class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta[] = [];
	
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

	consultarPorIndice(numero: String): number {
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

class Postagem{
    id: number
    texto: string
    quant_curtida: number = 0

    constructor(id: number, texto: string){
        this.id = id
        this.texto = texto
    }

    curtir(){
        this.quant_curtida++
    }

    toString(): string{
        return ('Postagem: '+this.texto+'  -  curtida: '+this.quant_curtida)
    }

}

/*let p1 : Postagem = new Postagem(1, "Amo")
p1.curtir()
p1.curtir()
p1.curtir()
console.log(p1.toString())
console.log(p1.quant_curtida)*/

class Microblog{
    postagens: Postagem[] = []

    incluir(postagem: Postagem): void{
        this.postagens.push(postagem)
    }

    buscar(id: number): Postagem{
        let postagemConsultada : Postagem
        for(let postagem of this.postagens){
            if(postagem.id == id){
                postagemConsultada = postagem
                break
            }
        }
        return postagemConsultada
    }

    excluir(id: number){
        let indice: number = this.consultarPorIndice(id);

        if(indice != -1){
            for(let i: number = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i+1]
            }
            this.postagens.pop()
        }
    }

    consultarPorIndice(id: number): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.postagens.length; i++) {
			if (this.postagens[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    postagem_mais_curtida(): Postagem [] {
        let maior = -1
        let indice: number = -1;
        for(let i: number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].quant_curtida > maior){
                maior = this.postagens[i].quant_curtida
                indice = i
            }
        }

        return new Array(this.postagens[indice])
    }

    curtirPostagem(id: number,){
        let indice = this.consultarPorIndice(id)
        if(indice != -1){
            this.postagens[indice].curtir()
        }
    }

    toString(){
        for(let postagem of this.postagens){
            console.log(postagem.toString())
        }
    }
}

let microblog: Microblog = new Microblog()
microblog.incluir(new Postagem(1, "kkkkkkff"))
microblog.incluir(new Postagem(2, "kkkkkk"))
microblog.incluir(new Postagem(6, "Hello!"))
microblog.curtirPostagem(1)
microblog.curtirPostagem(1)
microblog.curtirPostagem(2)
microblog.curtirPostagem(2)
microblog.curtirPostagem(6)
microblog.curtirPostagem(6)
microblog.curtirPostagem(6)
console.log(microblog.postagem_mais_curtida())
console.log(microblog)
microblog.toString()

