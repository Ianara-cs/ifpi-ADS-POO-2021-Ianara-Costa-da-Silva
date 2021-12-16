
// Questão 1
class Veiculo {
    private _placa: string
    private _ano: number

    constructor (placa: string, ano: number ){
        this._placa = placa
        this._ano = ano
    }

    get placa(): string{
        return this._placa
    }

     get ano(): number{
        return this._ano
    }
}

class Carro extends Veiculo{
    private _modelo : string

    constructor(placa: string, ano: number, modelo: string){
        super(placa, ano)
        this._modelo = modelo
    }

    get modelo(): string{
        return this._modelo
    }
}

class CarroEletrico extends Carro{
    private _autonomiaBateria : number

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo)
        this._autonomiaBateria = autonomiaBateria
    }

    get autonomiaBateria(): number{
        return this._autonomiaBateria
    }
}


// Questão 2
class Calculadora {
    private _op1: number
    private _op2: number

    constructor(op1: number, op2: number){
        this._op1 = op1
        this._op2 = op2
    }

    get op1(): number{      // Para questão 3
        return this._op1
    }

    get op2(): number{      // Para questão 3
        return this._op2
    }

    adicionar(): number{
        return this._op1 + this._op2
    }
}

let cal1 = new Calculadora(4, 6)
console.log(cal1.adicionar())

// Questão 3

class CalculadoraCientifica extends Calculadora{
    
    
    exponeciar(): number {
        return this.op1 ** this.op2
    }
}

let cal3 = new CalculadoraCientifica(3, 3)
console.log(cal3.exponeciar()) // 27

// C) Sim.


