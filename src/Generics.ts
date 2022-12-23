//Generics

function concatArray <T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,2],[5]);
const stgArray = concatArray<string[]>(["Max", "Steel"],["robô"]);

console.log(numArray);
console.log(stgArray);