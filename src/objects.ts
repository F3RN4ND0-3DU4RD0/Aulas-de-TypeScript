//Trabalhando com Object

//Object - sem previsibilidade
let produto: object ={
    name: "Boneco de super-Herói",
    preço: "99.99",
    unidades: 10,
}

//Object tipado - com previsibilidade 
type ProdutoLoja = {
    name: string,
    preço: number,
    unidades: number,
}

let meuProduto: ProdutoLoja = {
    name: "Boneco do Max Steel",
    preço: 25.90,
    unidades: 10,
}