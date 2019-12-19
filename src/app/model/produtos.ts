export class Produtos {
    constructor (
        public idProduto: number,
        public titulo: string,
        public detalhes: string,
        public linkfoto: string,
        public preco: string,
        public qtdEstoque: number
    ){}
}