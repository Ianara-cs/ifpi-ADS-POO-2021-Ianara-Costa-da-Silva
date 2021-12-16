class Produto {
    private _id: string
    private _descricao : string
    private _quantidade: number
    private _valor : number

    constructor(id: string, descricao: string, quant: number, valor: number){
        this._id = id
        this._descricao = descricao
        this._quantidade = quant
        this._valor = valor
    }
    get id(): string{
        return this._id
    }

    get descricao(): string{
        return this._descricao
    }

    get quantidade(): number{
        return this._quantidade
    }

    get valor(): number{
        return this._valor
    }

    repor(quant: number){
        return this._quantidade += quant 
    }

    darBaixa(quant : number){
        return this._quantidade -= quant
    }
}

class ProdutoPerecivel extends Produto {
    private _dataValidade : string

    constructor(id:string, descricao: string, quant: number, valor:number, dataValidade: string){
        super(id, descricao, quant, valor)
        this._dataValidade = dataValidade
    }

    get dataValidade(): string{
        return this._dataValidade
    }

    validade(dataAtual: string): string{
        let separador1 = dataAtual.split('/') 
        let separador2 = this._dataValidade.split('/')
        if(separador1[2] == separador2[2] && separador1[1] == separador2[1]){
            if(separador1[0] <= separador2[0]){
                return "Produto em validade"
            }else{
                return "VENCIDO"
            }
        }else if(separador1[2] == separador2[2] && separador1[1] < separador2[1]){
            return "Produto em validade"
        }else if(separador1[2] < separador2[2] ){
            return "Produto em validade"
        }
       
        return "VENCIDO"
    }
}

/*let creme = new Produto("222", "Bom", 13, 20)
let creme1 = new ProdutoPerecivel("222", "Bom", 13, 20, "12/08/2021")
console.log(creme1.validade("16/02/2020"))*/

class Estoque{
    private produtos: Produto[] = []

    inserir(produto: Produto){
        let indice = this.consultarPorIndice(produto.id)
        if(indice == -1){
            this.produtos.push(produto)
        }
    }

    /*consultar(id: String): Produto {
		let produtoConsultada: Produto 
		for (let produto of this.produtos) {
			if (produto.id == id) {
				produtoConsultada = produto
				break
			}
		}
		return produtoConsultada;
	}*/

    private consultarPorIndice(id: String): number {         
		let indice: number = -1;
		for (let i: number = 0; i < this.produtos.length; i++) {
			if (this.produtos[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    excluir(id: string){
        let indice: number = this.consultarPorIndice(id);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.produtos.length; i++) {
				this.produtos[i] = this.produtos[i+1];
			}

			this.produtos.pop();
		} 
    }

    repor(id: string, quantidade: number){
        let indice = this.consultarPorIndice(id)

        if(indice != -1){
            this.produtos[indice].repor(quantidade)
        }
    }

    darBaixa(id: string, quantidade: number){
        let indice = this.consultarPorIndice(id)

        if(indice != -1){
            this.produtos[indice].darBaixa(quantidade)
        }
    }

    listaVencidos(dataAtual: string): Produto[]{
        let vencidos: Produto[] = []
        for (let i: number = 0; i < this.produtos.length; i++) {
			if(this.produtos[i] instanceof ProdutoPerecivel){
                let produtoPerecivel: ProdutoPerecivel = this.produtos[i] as ProdutoPerecivel
                if(produtoPerecivel.validade(dataAtual) == "VENCIDO"){
                    vencidos.push(produtoPerecivel)
                }
            }
		}
        return vencidos
    }
}


let estoque = new Estoque()

estoque.inserir(new Produto("222", "BOM", 14, 5))
estoque.inserir(new ProdutoPerecivel("242", "BOM", 4, 15, "14/06/2021"))
estoque.inserir(new ProdutoPerecivel("122", "BOM", 100, 8, "17/06/2023"))
estoque.inserir(new ProdutoPerecivel("247", "BOM", 2, 10, "15/12/2021"))
estoque.inserir(new ProdutoPerecivel("288", "BOM", 13, 20, "19/09/2021"))
console.log(estoque)
console.log(estoque.listaVencidos("16/12/2021"))