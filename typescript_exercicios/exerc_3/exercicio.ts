/* Questão 1
 Classes são modelos, objetos são classes em execução/memória (instanciadas);

   Classe
 Nome: Texto;
 Data de Nascimento: Data;
 Altura: Número;

    Objeto
 Nome: Cláudio;
 Data de Nascimento: 20/05/1978;
 Altura: 1.6
*/

/* Questão 2
 Atributos são as características e propriedades que os objetos possuem;
 Métados são os comportamentos de um objeto ou ações que um objeto pode realizar;
  Objeto
  Animal

  Atributos:
  Tipo -> Gato
  Raça -> Persa
  Idade -> 3 anos
  Sexo -> Macho

  Métados:
  Andar
  Correr
  Comer
*/

/* Questão 3



    Atributos                           Sistema em que é                                        Sistema em que
                                        importante                                              não é importante

Peso                                    sistema de recrutamento de modelos                      ganhar uma bolsa na faculdade
Tipo de CNH                             sistema de recrutamento de mostorista                   sistema de doação de sangue
Tipo Sanguíneo                          sistema de Doação de sangue                             sistema de nota escolar
Habilidade destra                       sistema de recrutamento de jogador de vôlei             sistema bancário
Percentual de gordura                   
Saldo em conta                          sistema bancário                                        sistema de gerenciamento de tranporte
Etnia                                   sistema de cotas raciais                                sistema de vendas para varejo
*/

/* Questão 4
 a) Sim
 b) Sim. Array
*/

/* Questão 5
 Professor, Pais de aluno, técnico administrativo, boletim, egresso.
*/

/* Questão 6
 Personagem humano:
 Nome; sexo; idade; cor; 
 Andar; pular; atirar;

  zombie 
  sexo; tipo; idade;
  andar; correr; pular; atacar;

  arma
  tipo de arma; tipo de bala; cor; 
  atirar; mirar;

  carro
  tipo de carro; cor; número de porta; 
  andar; buzinar; frear;

  casa
  tipo de casa; cor; número de porta; número de janela;
  esconder; encontrar; 
 
*/

/* Questão 7 */

class TestaRetangulo {
  l1: number = 0;
  l2: number = 0;

  calculaArea(): number {
  return this.l1 * this.l2
  }

  calculaPerimetro(): number{
      return this.l1 + this.l1 + this.l2 + this.l2
  }
}

let retangulo: TestaRetangulo
retangulo = new TestaRetangulo()
retangulo.l1 = 2
retangulo.l2 = 4

console.log("Perímetro = " + retangulo.calculaPerimetro())   // 12

/* Questão 8 */

class Circulo {
  raio: number = 0;
  
  calculaArea(): number {
      return 3.14 * this.raio ** 2
  }

  calculaPerimetro(): number {
      return 2 * 3.14 * this.raio
  }
}

let circulo: Circulo
circulo = new Circulo()
circulo.raio = 3

console.log("Área = " + circulo.calculaArea())  // 28.26
console.log("Perímetro = " + circulo.calculaPerimetro())  // 18.84

/* Questão 9 */

class SituacaoFinanceira{
  valorCreditos : number = 0
  valorDepidos : number = 0

  saldo(): number{
      return this.valorCreditos - this.valorDepidos
  }
}

let situacao: SituacaoFinanceira
situacao = new SituacaoFinanceira()
situacao.valorCreditos = 1000
situacao.valorDepidos = 200

console.log("Saldo total = " + situacao.saldo())  // 800
