/* Desafio
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores,
porém temos apenas a quantidade de horas trabalhadas e o valor hora. 
Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas,
o valor que recebe por hora e calcula o salário desse colaborador. 
Em seguida, apresente o número e o salário do colaborador, com duas casas decimais. */
let valor1 = parseInt(gets(25));
let valor2 = parseInt(gets(100));
let valor3 = parseFloat(gets(5.50));

// Escreva o seu código aqui

let number = valor1;
let salary = valor2 * valor3;
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary +".00");
