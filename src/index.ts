

/*tipos de variáveis{
    PRIMITIVOS
    boolean
    string
    number


    ESPECIAIS
    null
    undefined

    ABRANGENTES
    void
    any
}*/

//Primitivos
let Nome: string = "Fernando";
let Idade: number = 20;
let Altura = 1.85;
let ligado: boolean = true;

//Especiais
let nulo: null = null;
let indefinido: undefined = undefined;

//Abrangentes
let vazio: void;
let qualquerCoisa: any = "Literalmente qualquer coisa";
let qualquerNumero: any = 40352;

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