/*  Exercícios de interpretação de código
    Exercício 1
    Realiza um texte em numeros.
    Pares.
    Impares.
    
    Exercício 2
    Para o usuário escolher o seu produto das opções
    O preço da fruta Maçã é R$ 2.25
    O preço da fruta Pêra é R$ 5

    Exercício 3
    Pedindo para receber um numero em string e depois converte em numero
    Esse número passou no teste. Essa mensagem é secreta!!! 
    Sim, Porque a variável "mensagem" não é global
*/
//  Exercícios de escrita de código
//  Exercício 4
const usuario = Number(prompt("Qual a sua idade?"))
if(usuario >= 18){  
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir")
}

//  Exercício 5
let aluno = prompt("Informe o turno que você estuda. M(Matutino), V(Vespertino) ou N(Noturno)")
if(aluno === "M"){
    console.log("Bom Dia!")
}
else if(aluno === "V"){
    console.log("Boa Tarde!")
}
else{
    console.log("Boa Noite")
}

//  Exercício 6
aluno = prompt("Informe o turno que você estuda. M(Matutino), V(Vespertino) ou N(Noturno)")
switch(aluno){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    default:
        console.log("Boa Noite!")
        break
}

// Exercício 7
let filme = [prompt("Qual o gênero do filme?"), Number(prompt("Qual o valor do ingresso?"))]
if(filme[0] === "fantasia" && filme[1] < 15){
    console.log("Bom filme!")
} 
else{
    console.log("Escolha outro filme :(")
}

//Desafio 1
filme = [prompt("Qual o gênero do filme?"), Number(prompt("Qual o valor do ingresso?"))]
if(filme[0] === "fantasia" && filme[1] < 15){
    const snack = prompt("Qual lanche você vai comprar?")
    console.log("Bom filme!")
    console.log("... com " + snack)
} 
else{
    console.log("Escolha outro filme :(")
}

//Desafio 2
const name = prompt("Qual o seu nome completo?")
let game = prompt("Qual o tipo do jogo? IN(internacional) e DO(doméstico).")
let stage = prompt("Qual a etapa do jogo? SF(semi-final); DT decisão de terceiro lugar; FI final")
const category = Number(prompt("1, 2, 3 ou 4"))
const amount = Number(prompt("Qual a quantidade de ingressos?"))
let ticketvalue = 0
let value = 0

if(game === "DO"){
    game = "Nacional"
    if(stage === "SF"){
        stage = "Semi-final" 
        if(category === 1){
            ticketvalue = 1.320
            value = ticketvalue * amount
        }
        else if(category === 2){
            ticketvalue = 880
            value = ticketvalue * amount
        }
        else if(category === 3){
            ticketvalue = 550
            value = ticketvalue * amount
        }
        else{
            ticketvalue = 220
            value = ticketvalue * amount
        }
    }
    else if(stage === "DT"){
        stage = "Decisão do 3°lugar"
        if(category === 1){
            ticketvalue = 660
            value = ticketvalue * amount
        }
        else if(category === 2){
            ticketvalue = 440
            value = ticketvalue * amount
        }
        else if(category === 3){
            ticketvalue = 330
            value = ticketvalue * amount
        }
        else{
            ticketvalue = 170
            value = ticketvalue * amount
        }
    }
    else{
        stage = "Final"
        if(category === 1){
            ticketvalue = 1980
            value = ticketvalue * amount
        }
        else if(category === 2){
            ticketvalue = 1320
            value = ticketvalue * amount
        }
        else if(category === 3){
            ticketvalue = 880
            value = ticketvalue * amount
        }
        else{
            ticketvalue = 330
            value = ticketvalue * amount
        }
    }
}
else{
    game = "Internacional"
    if(stage === "SF"){
        stage = "Semi-final" 
        if(category === 1){
            ticketvalue = 1.320 / 4.10
            value = ticketvalue * amount
            value /= 4.10 
        }
        else if(category === 2){
            ticketvalue = 880 / 4.10
            value = ticketvalue * amount
            value /= 4.10 
        }
        else if(category === 3){
            ticketvalue = 550 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else{
            ticketvalue = 220 / 4.10
            value = ticketvalue * amount
            value /= 4.10 
        }
    }
    else if(stage === "DT"){
        stage = "Decisão do 3°lugar"
        if(category === 1){
            ticketvalue = 660 / 4.10
            value = ticketvalue * amount
            value /= 4.10 
        }
        else if(category === 2){
            ticketvalue = 440 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else if(category === 3){
            ticketvalue = 330 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else{
            ticketvalue = 170 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
    }
    else{
        stage = "Final"
        if(category === 1){
            ticketvalue = 1980 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else if(category === 2){
            ticketvalue = 1320 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else if(category === 3){
            ticketvalue = 880 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
        else{
            ticketvalue = 330 / 4.10
            value = ticketvalue * amount
            value /= 4.10
        }
    }
}

console.log("---Dados da comprar---")
console.log("Nome do cliente: " + name)
console.log("Tipo do jogo: " + game)
console.log("Etapa do jogo: " + stage)
console.log("Categoria: " + category)
console.log("Quantidade de Ingressos: " + amount + " ingressos")
console.log("---Valores---")
if(game = "Internacional"){
    console.log("Valor do ingresso: U$ " + ticketvalue)
    console.log("Valor total: U$ " + value * 4.10)
}
else{
    console.log("Valor do ingresso: R$ " + ticketvalue)
    console.log("Valor total: R$ " + value)
}