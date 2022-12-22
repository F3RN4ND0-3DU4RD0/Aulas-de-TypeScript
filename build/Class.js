"use strict";
class Individuo {
    constructor(cpf, nome) {
        this.cpf = cpf;
        this.nome = nome;
    }
    cumprimentar() {
        console.log(`Olá ${this.nome}, seja bem vindo!`);
    }
}
const Ind = new Individuo(12345, "Ronaldinho Gaúcho");
Ind.cumprimentar();
