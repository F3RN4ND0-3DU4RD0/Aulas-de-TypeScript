//Classes

/*
Data Modifiers
Private - Somente a classe terá acesso.
Public - Tanto a classe, sub-classe quanto outros arquivos poderão acessar.
Protected - Somente a classe e a sub-classe terão acesso.

obs: quando uma variável tiver (?), significa que ela é opcional.
*/

class Character {
  public name?: string;
  private strenght: number;
  protected skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strenght = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`${this.name} attack with ${this.strenght} points!`);
  }
}

const p1 = new Character("Zenyem",10,98);
p1.attack();
