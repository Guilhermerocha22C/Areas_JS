const media = require("prompt-sync")();

let distancia = Number(media("Digite o primeiro número: "));
let combustivel = Number(media("Digite o segundo número: "));

let consumoPorLitro = distancia / combustivel

console.log(`Km/l: ${consumoPorLitro.toFixed(3)}`);
