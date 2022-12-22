//Classes
class Character {
  name?: string;
  strenght: number;
  skill: number;

  constructor( strength: number, skill: number) {
   
    this.strenght = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strenght} points!`);
  }
}

const p1 = new Character(10,98);
p1.attack();
