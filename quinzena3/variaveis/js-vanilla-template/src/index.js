/*Exercícios de interpretação de código
1.  b = 10;
    (a = 10, b = 5);

2.  (10, 10, 10);*/

/*  Exercícios de escrita de código
*/

//1

let name;
let age;
console.log(typeof name);
console.log(typeof age);

/*  undefined
    undefined 
    Porque não foi atribuido um valor
*/

name = prompt();
age = prompt();
console.log(typeof name);
console.log(typeof age);

/*  string
    string
*/

console.log("Olá " + name+", você tem " + age + " anos");

//2

let email = prompt("Qual o seu email?");
let numero = prompt("Qual o seu numero?");
let senha = prompt("Qual o sua senha?");
let jogo = prompt("Qual o seu jogo?");
let carro = prompt("Qual o seu carro?");
console.log(email);
console.log(numero);
console.log(senha);
console.log(jogo);
console.log(carro);

//3

let array = ["pizza", "c-pop", "bolo", "sorvete", "açai"];
console.log(array[0], array[1], array[2], array[3], array[4]);
console.log("Essas são as minhas comidas preferidas:");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

console.log("////////////////");

array = ["pizza", prompt("comida"), "bolo", "sorvete", "açai"];
console.log(array[0], array[1], array[2], array[3], array[4]);
console.log("Essas são as minhas comidas preferidas:");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//4

let array4 = [prompt("Gosta de netflix and chill?"), prompt("Gosta de conversar por longas horas?"), prompt("Aceita casar comigo?")];
let bool = ["sim", "sim", "sim"];
console.log(Boolean(array4[0] == bool[0]));
console.log(Boolean(array4[1] == bool[1]));
console.log(Boolean(array4[2] == bool[2]));