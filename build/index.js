"use strict";
class Character {
    constructor(strength, skill) {
        this.strenght = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenght} points!`);
    }
}
const p1 = new Character(10, 98);
p1.attack();
