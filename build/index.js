"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strenght = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} attack with ${this.strenght} points!`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPower) {
        super(name, strength, skill);
        this.magicPower = magicPower;
    }
    iceAttack() {
        const danoDeGelo = this.magicPower / 2;
        console.log(`${this.name} attack with iceAttack ${danoDeGelo}`);
    }
}
const p1 = new Character("Zenyem", 10, 98);
const p2 = new Magician("Mago de Gelo", 15, 110, 150);
p1.attack();
p2.iceAttack();
