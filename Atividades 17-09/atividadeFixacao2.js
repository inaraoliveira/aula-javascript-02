/* 1) Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:
a. Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.
b. Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.
c. Dado que x = “7” e y = 7, valide se os valores são iguais.*/

function atv2_1a(){
    var x = 5;
    var y = 8;
    
    console.log(x === y);
  }
  
  function atv2_1b(){
    var x = 6;
    var y = "6";
    
    console.log(x !== y);
  }
  
  function atv2_1c(){
    var x = "7";
    var y = 7;
    
    console.log(x == y);
  }

/* 2) Declare uma variável chamada nome.
a) Atribua a ela o valor “Fulano”.
b) Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.*/

var nome = "Fulano";
console.log("Boa noite, " + nome + "!");

/* 3) Considere x = x + y, dado que x = 10 e y = 5.
a) Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.
b) Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.
c) Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.
d) Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.
e) Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.*/

let x = 10;
let y = 5;

console.log(x += y);
console.log(x *= y);
console.log(x %= y);
console.log(x /= y);
console.log(x -= y);