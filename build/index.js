"use strict";
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
let Nome = "Fernando";
let Idade = 20;
let Altura = 1.85;
let ligado = true;
//Especiais
let nulo = null;
let indefinido = undefined;
//Abrangentes
let vazio;
let qualquerCoisa = "Literalmente qualquer coisa";
let qualquerNumero = 40352;
//Trabalhando com Object
//Object - sem previsibilidade
let produto = {
    name: "Boneco de super-Herói",
    preço: "99.99",
    unidades: 10,
};
let meuProduto = {
    name: "Boneco do Max Steel",
    preço: 25.90,
    unidades: 10,
};
//Trabalhando com Array
let dados = ["Fernando", "Roberto", "Carlos"];
let dados2 = ["Adalberto", "Juliano", "Carlos Magno"];
//Array de múltiplos tipos
let infos = ["Julio Cesar", 49, true];
//Tuplas
let boleto = [20, "dezembro", 2022];
//Métodos do Javascript servem todos para o Typescript
dados.pop();
//Trabalhando com datas
let meuAniversario = new Date("2002-06-25 13:00");
console.log(meuAniversario.toString());
