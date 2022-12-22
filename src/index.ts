//Funções

function somar(x: number, y: number): number {
  return x + y;
}

function mostrarNome(name: String) {
  return `Hello ${name}`;
}

function CalltoPhone(phone: number | string): any {
  return phone;
}

let resultado: number = somar(40, 7);
console.log(resultado);

let meuNome: string = mostrarNome("Fernando");
console.log(meuNome);

let liguePara: number = CalltoPhone(85912344321);
console.log(liguePara);