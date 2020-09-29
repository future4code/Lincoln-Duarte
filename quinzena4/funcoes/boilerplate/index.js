console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
/*
    Exercícios de interpretação de código
    Exercício 1
    a. 10 50
    b. nada

    Exercício 2
    a. Darvas, Goli
    b. Amanda, Caio

    Exercício 3
    multiplo de dois
*/
//  Exercícios de escrita de código
//  Exercício 4
/*
function print(){
    console.log("Eu sou Lincoln, tenho 21 anos, moro em Maceió e sou estudante.")
}

print()

function quemsoueu(name, age, city, yesorno){
    console.log("Eu sou " + name + ", tenho " + age + " anos, moro em " + city + " e " + yesorno + " estudante")
}

const name = prompt("Qual o seu nome?")
const age = Number(prompt("Qual a sua idade?"))
const city = prompt("Onde você mora?")
let yesorno = prompt("Você é um estudante?")

if(yesorno === "sim"){
    yesorno = "sou"
    quemsoueu(name, age, city, yesorno)
}
else{
    yesorno = "não sou"
    quemsoueu(name, age, city, yesorno)
}

*/
// Exercício 5
/*
function soma(x, y){
    const plus = x + y
    return plus
}

let primeiro = Number(prompt("Digite um numero!"))
let segundo = Number(prompt("Digite um segundo numero!"))
console.log(soma(primeiro, segundo))

function verificar(x, y){
    if(x >= y){
        return true
    }
    else{
        return false
    }
}

primeiro = Number(prompt("Digite um numero!"))
segundo = Number(prompt("Digite um segundo numero!"))

console.log(verificar(primeiro, segundo))

function imprimirloop(x, something){
    x++
    console.log(something)
    imprimir(x, something)
}
function imprimir(x, something){
    if(x < 10){
        imprimirloop(x, something)
    }
    else{
        return 0
    }
}

let x = 0
const something = prompt("Digite qualquer coisa")
imprimir(x, something)
*/
//Exercício 6
/*
//a
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function quantidade(array){
    return array.length
}
console.log(quantidade(array))
//b
function par(x){
    if(x % 2 === 0){
        return true
    }
    else{
        return false
    }
}
const numero = Number(prompt("Digite um numero!"))
console.log(par(numero))
//c
function quantidadepar(array){
    let pares = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            pares ++
        }
    }
    return pares
}
console.log(quantidadepar(array))
//d
function quantidadepar2(array){
    let pares = 0
    for(let i = 0; i < array.length; i++){
        if(par(array[i])){
            pares ++
        }
    }
    return pares
}
console.log(quantidadepar2(array))
*/
//Desafios
//Exercício 1
/*
const recebe = (a) => {
    console.log(a)
}
const outrarecebe = (x, y) => {
    const soma = x + y
    recebe(soma)
}

const primeiro = Number(prompt("Digite um numero!"))
const segundo = Number(prompt("Digite um segundo numero!"))

outrarecebe(primeiro, segundo)
*/
//  Exercício 2
/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
const arraypar = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array[i] *= 2
        }
        else{
           array.splice(i, 1)
            i--
        }
    }
    return array
}
const array = arraypar(numeros)
console.log(array)
*/
/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let maior = numeros[0]
for (let i = 0; i < numeros.length; i++) {
    if(maior < numeros[i + 1]){
        maior = numeros[i + 1]
    }
}
console.log(maior)
*/
/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let maior = numeros[0]
let indice = 0
for (let i = 0; i < numeros.length; i++) {
    if(maior < numeros[i + 1]){
        maior = numeros[i + 1]
        indice = i + 1
    }
    
}
console.log(indice)
*/
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
const array = []
for(let i = numeros.length -1; i > -1; i--){
    array.push(numeros[i])
}
console.log(array)