console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");

/*  Exercícios de interpretação de código

    1.  
    a. false
    b. false
    c. true
    e. boolean
    
    2.  
    a. undefined
    b. null
    c. 11
    d. 3
    e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
    f. 10
*/

//  Exercícios de escrita de código

//1
let age = Number(prompt("Qual a sua idade?"));
let friend_age = Number(prompt("Qual a idade do seu melhor amigo?"));
console.log("Sua idade é maior do que a do seu melhor amigo?");
let bool = age > friend_age;
console.log(bool);
console.log(bool = age - friend_age);

//2
const par = Number(prompt("Insira um número par"));
console.log(par % 2);
//sim, porque todos são divisiveis por dois e não tem resto.
//vai ter resto porque o numero não é par.

//3
let listaDeTarefas = [];
listaDeTarefas.push(prompt("Quais são as refeições do dia?"));
listaDeTarefas.push(prompt("Você ja fez todas as atividades de ontem?"));
listaDeTarefas.push(prompt("Quais os objetivos de hoje para ser incrivel?"));
console.log(listaDeTarefas[0]);
console.log(listaDeTarefas[1]);
console.log(listaDeTarefas[2]);

let input = prompt("Digite o índice da atividade finalizada '0' para primeira '1' para segunda '2' para terceira");
listaDeTarefas.splice(input, 1);
console.log(listaDeTarefas[0]);
console.log(listaDeTarefas[1]);
console.log(listaDeTarefas[2]);

//4
let name = prompt("Qual o seu nome?");
let email = prompt("Qual o seu E-mail?");
console.log("o e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + name +"!");

//Desafios
let celsius;
let fahrenheit = (celsius) * 9 / 5 + 32;
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
//1
//a
kelvin = (77 - 32) * 5 / 9 + 273.15;
console.log(kelvin);

//b
fahrenheit = (80) * 9 / 5 + 32;
console.log(fahrenheit);

//c
fahrenheit = (30) * 9 / 5 + 32;
console.log(fahrenheit);
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log(kelvin);

//d
fahrenheit = (prompt("insira o valor em celsius.")) * 9 / 5 + 32;
console.log(fahrenheit);
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
console.log(kelvin);

//2
//a
quilowatt_hora = 280 * 0.05;
console.log(quilowatt_hora);
let desconto = quilowatt_hora * 0.15;
quilowatt_hora -= desconto;
console.log(quilowatt_hora);

//3
//a
let kilo = 20 / 2.205;
console.log("20lb equivalem a " + kilo +" kg");

//b
kilo = 10.5 / 3.527;
console.log("10.5oz equivalem a " + kilo + " kg");

//c
let metros = 100 * 1609;
console.log("100mi equivalem a " + metros + " m");
 
//d
metros = 50 / 3.281;
console.log("50ft equivalem a " + metros + " m");

//e
let litros = 103.56 * 379;
console.log("103.56gal equivalem a " + litros + " l");

//f
litros = 450 * 28.413;
console.log("450 xic equivalem a " + litros + " l");

//g
let libras = prompt("digite o valor em libras para ser convertido em quilogramas");
kilo = libras / 2.205;
console.log(libras + "lb equivalem a " + kilo +" kg");