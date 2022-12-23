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
    protected strenght: number;
    private skill: number;
  
    constructor(name: string, strength: number, skill: number) {
      this.name = name;
      this.strenght = strength;
      this.skill = skill;
    }
  
    attack(): void {
      console.log(`${this.name} attack with ${this.strenght} points!`);
    }
  }
  
  class Magician extends Character {
    magicPower: number;
    constructor(
      name: string,
      strength: number,
      skill: number,
      magicPower: number
    ) {
      super(name, strength, skill);
  
      this.magicPower = magicPower;
    }
  
    //Parte que inclui no código, fora da aula
    iceAttack(): void {
      const danoDeGelo = this.magicPower / 2;
      console.log(`${this.name} attack with iceAttack ${danoDeGelo}`);
      //Parte que inclui no código, fora da aula
    }
  }
  
  const p1 = new Character("Zenyem", 10, 98);
  const p2 = new Magician("Mago de Gelo", 15, 110, 150);
  p1.attack();
  p2.iceAttack();
  