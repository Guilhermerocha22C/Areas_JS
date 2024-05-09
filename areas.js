const leitura = require("prompt-sync")();

let a = Number(leitura("Digite o valor de A: "));
let b = Number(leitura("Digite o valor de B: "));
let c = Number(leitura("Digite o valor de C: "));

let areaTriangulo = (a * c) / 2;
let areaCirculo = 3.14159 * (c * c);
let areaTrapezio = ((a + b) * c) / 2;
let areaQuadrado = b * b;
let areaRetangulo = a * b;

console.log(`TRIANGULO ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO ${areaRetangulo.toFixed(3)}`);
