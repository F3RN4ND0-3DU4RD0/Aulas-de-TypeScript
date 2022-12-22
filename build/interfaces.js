"use strict";
const bot1 = {
    id: "2",
    name: "K-72",
    sayHello: function () {
        return "";
    },
};
const bot2 = {
    id: 1,
    name: "F-14",
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(5, "C-34");
console.log(p.sayHello());
