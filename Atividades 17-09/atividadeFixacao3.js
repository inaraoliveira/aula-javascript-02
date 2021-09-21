// 1) Criar bloco de código que mostra, no console, o resto da divisão de 25 por 3.

function atv3_1(){
    let restoDivisao = 25 % 3
    console.log(restoDivisao);
}

/* 2)  Criar bloco de código que mostra, no console, a concatenação das variáveis abaixo:
a) texto1 = "Programa Start - "
b) texto2 = "formação Front end: "
c) texto3 = "eu faço parte dessa oportunidade."*/

function atv3_2(){
    let texto1 = "Programa Star - ";
    let texto2 = "Formação Front-end: ";
    let texto3 = "Eu faço parte dessa oportunidade.";
    
    texto1 += texto2;
    texto1 += texto3;
    
    console.log(texto1);
}

/* 3) Criar bloco de código que mostra, no console, o resultado da concatenação das variáveis abaixo:
a) texto1 = "Mariazinha tem "
b) idade =  9
c) texto2 = "anos e "
d) quantidade_irmaos = 7
e) texto3 = " irmãos."*/

function atv3_3(){
    let texto1 = "Mariazinha tem ";
    let idade = 9;
    let texto2 = " anos e ";
    let quantidade_irmaos = 7;
    let texto3 = " irmãos."
    
    texto1 += idade;
    texto1 += texto2;
    texto1 += quantidade_irmaos;
    texto1 += texto3;
    
    console.log(texto1);
}