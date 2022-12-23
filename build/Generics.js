"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2], [5]);
const stgArray = concatArray(["Max", "Steel"], ["robô"]);
console.log(numArray);
console.log(stgArray);
