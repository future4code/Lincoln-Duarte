console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
/*  Exercícios de interpretação de código
    Exercício 1
    Cria uma variável "valor" com o valor numero = 0,
    passa essa variável por um loop i < 5 somando ao 
    valor anterior e imprime o valor 6 no console.

    Exercício 2
    a.  19 21 23 25
    b.  sim, for e while
    
    Desafio 1
    0
    00
    000
    0000
*/
//  Exercícios de escrita de código
// Exercício 3
const arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log("Resposta item a.")
for(let array of arrayoriginal){
    console.log(array)
}

console.log("Resposta item b.")
for(let array of arrayoriginal){
    console.log(array / 10)
}

console.log("Resposta item c.")
const novoarray = []
for(let i = 0; i < arrayoriginal.length; i++){
    if(arrayoriginal[i] % 2 === 0){
        novoarray.push(arrayoriginal[i])
    }
}
for (let i = 0; i < novoarray.length; i++){
    console.log(novoarray[i])   
}
console.log("Resposta item d.")
let novoarray2 = []
for (let i = 0; i < arrayoriginal.length; i++) {
    novoarray2[i] = "O elemento do índex " + i + " é: " + arrayoriginal[i]
    console.log(novoarray2[i])
}
console.log("Resposta item e.")
let maior = arrayoriginal[0]
for (let i = 0; i < arrayoriginal.length; i++) {
    if(maior < arrayoriginal[i + 1]){
        maior = arrayoriginal[i + 1]
    }
}
let menor = arrayoriginal[0]
for (let i = 0; i < arrayoriginal.length; i++) {
    if(menor > arrayoriginal[i + 1]){
        menor = arrayoriginal[i + 1]
    }
}
console.log("O maior número é " + maior + " e o menor é " + menor)

//Desafio 2
let primeirojogador = Number(prompt("Escolha um numero"))
let tentativas = 0
let i = 1
console.log("Vamos jogar!")
while(i !== 0){
    const segundojogador = Number(prompt("Chute o numero do primeiro Jogador"))
    console.log("O Número chutado foi: " + segundojogador)
    if(segundojogador === primeirojogador){
        i = 0
        console.log("Acertou!!")
        tentativas ++
        console.log("O número de tentativas foi: " + tentativas)
    }
    tentativas ++
    if(segundojogador < primeirojogador){
        console.log("Errrrrrrrou, é maior")
    }
    else if(segundojogador > primeirojogador){
        console.log("Errrrrrrrou, é menor")
    }
}

//Desafio 3
function functionrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
primeirojogador = functionrandom(1 , 100)
tentativas = 0
i = 1
console.log("Vamos jogar!")
while(i !== 0){
    const segundojogador = Number(prompt("Chute o numero do primeiro Jogador"))
    console.log("O Número chutado foi: " + segundojogador)
    if(segundojogador === primeirojogador){
        i = 0
        console.log("Acertou!!")
        tentativas ++
        console.log("O número de tentativas foi: " + tentativas)
    }
    tentativas ++
    if(segundojogador < primeirojogador){
        console.log("Errrrrrrrou, é maior")
    }
    else if(segundojogador > primeirojogador){
        console.log("Errrrrrrrou, é menor")
    }
}