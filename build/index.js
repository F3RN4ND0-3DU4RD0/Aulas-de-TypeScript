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
const p1 = new Character("Zenyem", 10, 98);
p1.attack();
