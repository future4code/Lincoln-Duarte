/*  Exercícios de interpretação de código
    1. R$100 * cotação
    2. 165 / TIPO DE INVESTIMENTO INFORMADO INCORRETO!
    3. Quantidade total de números 14 / 6 / 8
    4. -10 / 1590

//  Exercícios de Lógica de Programação
    1.  
    for(numero of numeros){

    }
    for(let i = 0; i < array.length; i++){

    }
    function loop2(array, i){
        if(i === array.length){
            break
        }
        i++
        loop2(array, i)
    }
    2.
    a. false
    b. false
    c. true
    d. true
    e. true 
*/
/*
//3
//Não, porque o contador não aumenta e a constante não tem valor
const quantidadeDeNumerosPares = Number(prompt("Quantos numeros pares você quer vizualizar?"));
let i = 0;
while(i < quantidadeDeNumerosPares){
    console.log(i*2);
    i++;
}
//4
const a = Number(prompt("Declare um lado do triângulo"));
const b = Number(prompt("Declare um lado do triângulo"));
const c = Number(prompt("Declare um lado do triângulo"));
function triangulo(a, b, c){
    if(a === b && b === c){
        return "Equilátero";
    }
    else if(a === b && b !== c){
        return "Isósceles";
    }
    else{
        return "Escaleno";
    }
}
console.log(triangulo(a, b, c));
//5
const numero1 = 15;
const numero2 = 30;
let menor = 0;
let maior = 0;
let contador  = 0;

if(numero1 > numero2){
    console.log("O maior é:", numero1);
    menor = numero2;
    maior = numero1; 
}
else{
    console.log("O maior é:", numero2);
    menor = numero1;
    maior = numero2; 
}

if(numero1 % numero2 === 0){
    console.log(numero1 + " é divisível por " + numero2);
}
else{
    console.log(numero1 + " não é divisível por " + numero2);
}

if(numero2 % numero1 === 0){
    console.log(numero2 + " é divisível por " + numero1);
}
else{
    console.log(numero2 + " não é divisível por " + numero1);
}

for(let i = menor; i < maior; i++){
    contador ++;
}

console.log("A diferença entre eles é", contador);
*/
/*
//  Exercícios de Funções
function verificamaioremenor(array ,maior, menor, i){
    if(i > array.length){
        console.log("dfsd", maior)
        console.log("dfsd", menor)
        return 0
    }
    if(maior < array[i + 1]){
        maior = array[i + 1]
    }
    if(menor > array[i + 1]){
        menor = array[i + 1]
    }
    verificamaioremenor(array, maior, menor, i + 1)
}

const array = [-10,2,3,4,5,10,6,5465,7,8,9]
let maior = array[0]
let menor = array[0]

verificamaioremenor(array, maior, menor, 0)

const print = () => {
    alert("Hello Future4")
}
print()
*/
/*
//  Exercícios de objetos
//  1. Arrays são gavetas as quais podemos guardar várias coisas nela
//     Objetos são divisorias que guardam por tipo de uso
//     Podemos usa-los em momentos onde temos que armazenar dados de um usuario

function criaRetangulo(lado1, lado2){
    const objeto = {
        largura: lado1,
        altura: lado2,
        perímetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return objeto
}
console.log(criaRetangulo(Number(prompt("Primeiro lado")), Number(prompt("segundo lado"))))

const filmefavorito = {
    titulo: prompt("Qual o titulo do filme mais incrivel do mundo?"),
    ano: prompt("Em que ano passou nas telas de cinema?"),
    diretor: prompt("Quem dirigiu?"),
    ator1: prompt("Qual ator foi marcante?"),
    ator2: prompt("Qual o ator marcou tambem?"),
}
alert("Venha assistir ao filme " + filmefavorito.titulo + ", de " + filmefavorito.ano + 
", dirigido por " + filmefavorito.diretor + " e estrelado por " + filmefavorito.ator1 + ", " + filmefavorito.ator2)

let theone = {
    nome: prompt("Qual o nome da pessoa?"),
    idade: prompt("Qual a idade?"),
    email: prompt("Qual o email?"),
    endereco: prompt("Qual o endereço dela?")
}

function anonimizarPessoa(pessoa){
    return pessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}

theone = anonimizarPessoa(theone)
console.log(theone)
*/
