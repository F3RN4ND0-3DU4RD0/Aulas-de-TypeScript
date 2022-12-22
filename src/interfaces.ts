//Interfaces (Type X Interface)
type robot = {
    readonly id: number | string;
    name: string;
  };
  
  interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
  }
  
  const bot1: robot2 = {
    id: "2",
    name: "K-72",
    sayHello: function (): string {
      return "";
    },
  };
  const bot2: robot = {
    id: 1,
    name: "F-14",
  };
  
  class Pessoa implements robot2 {
    id: string | number;
    name: string;
  
    constructor(id: string | number, name: string) {
      this.id = id;
      this.name = name;
    }
    sayHello(): string {
      return `Hello i'm ${this.name}`;
    }
  }
  
  const p = new Pessoa(5, "C-34");
  console.log(p.sayHello());
  