/* 1) Criar variáveis para:
a) Armazenar os valores: 7, -55, 389, 1000, 3.1459, -46.267;
b) As variáveis deverão ser do tipo objeto Number;
c) Mostrar os valores no console;
d) Somar a primeira variável com a última variável;
e) Mostrar os valores no console;
f) Multiplicar a primeira variável com a terceira variável;
g) Mostrar os valores no console;
h) Dividir a quarta variável pela quinta variável;
i) Mostrar os valores no console. */

var num1 = new Number(7);
var num2 = new Number(-55);
var num3 = new Number(389);
var num4 = new Number(1000);
var num5 = new Number(3.1459);
var num6 = new Number(-46.267);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

 
console.log(num1 + (num6));
console.log(num1 * num3);
console.log(num4 / num5);

/* 2) Criar variáveis para:
a) Armazenar os valores: 10, 3, 9, 99.9, 721;
b) As variáveis deverão ser do tipo objeto Number.
c) Mostrar os valores no console.
d) Validar se a primeira variável é menor que o valor Number.MAX_VALUE;
e) Mostrar o resultado e valores no console;
f) Validar se a segunda variável possui valor igual a NaN;
g) Mostrar o resultado e valores no console;
h) Validar se a quinta variável é menor ou igual a terceira variável;
i) Mostrar o resultado e valores no console.*/

let num1 = new Number(10);
let num2 = new Number(3);
let num3 = new Number(9);
let num4 = new Number(99.9);
let num5 = new Number(721);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);


let maiorNumeroPositivo = num1 < Number.MAX_VALUE ? "Menor." : "Não é menor.";
console.log(maiorNumeroPositivo);

let nulo = num2 == Number.NaN ? "Possui valor igual a NaN." : "Não possui valor igual a NaN.";
console.log(nulo);

let menorOuIgual = num5 <= num3 ? "É menor ou igual." : "É maior."
console.log(menorOuIgual);
