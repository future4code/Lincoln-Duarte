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
function verificamaioremenor(array ,maior, menor, i, segundomaior, segundomaior){
    if(i >= array.length){
        segundomenor = maior
        for(let cont = 0; cont < array.length; cont++){
            if(segundomaior < array[cont] && array[cont] !== maior){
                segundomaior = array[cont]
            }
            if(segundomenor > array[cont] && array[cont] !== menor){
                segundomenor = array[cont]
            }
        }
        
        console.log(segundomaior)
        console.log(segundomenor)
        return 0
    }
    if(maior < array[i]){
        maior = array[i]
    }
    if(menor > array[i]){
        menor = array[i]
    }
    verificamaioremenor(array, maior, menor, i + 1, segundomaior, segundomaior)
}

const array = [-10,2,3,4,5,10,6,5465,7,8,9]
let maior = 0
let menor = 0
let segundomaior = 0
let segundomenor = 0

verificamaioremenor(array, maior, menor, 0, segundomaior, segundomaior)

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

// Funçôes de array
const array = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

const veio = (array) => {
    if(array.idade >= 20){
        return true
    }
    else{
        return false
    }
}

const novo = (array) => {
    if(array.idade < 20){
        return true
    }
    else{
        return false
    }
}

console.log(array.filter(veio))
console.log(array.filter(novo))

const array = [1, 2, 3, 4, 5, 6]

const multiplica = (array) => {
    return array * 2
}

console.log(array.map(multiplica))

const multiplicaString = (array) => {
    return String(array * 3)
}

console.log(array.map(multiplicaString))

const arraydeString = (array) =>{
    if(array % 2 === 0){
        return array + " é par"
    }
    else{
        return array + " é impar"
    }
}

console.log(array.map(arraydeString))

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permissao = (array) =>{
    if(array.altura >= 1.5){
        if(array.idade > 14 && array.idade < 60){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

console.log(pessoas.filter(permissao))

const permissaoNegada = (array) =>{
    if(array.altura >= 1.5){
        if(array.idade > 14 && array.idade < 60){
            return false
        }
        else{
            return true
        }
    }
    else{
        return true
    }
}

console.log(pessoas.filter(permissaoNegada))

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultaMarcada = (array) => {
    if(array.genero === "masculino"){
        console.log("Olá, Sr." + array.nome + ". Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia "
        + array.dataDaConsulta + ". Por favor, acuseo recebimento deste e-mail.")
    }
    else{
        console.log("Olá, Sra." + array.nome + ". Estamos enviando esta mensagem para lembrá-la da sua consulta no dia "
        + array.dataDaConsulta + ". Por favor, acuseo recebimento deste e-mail.")
    }
}
const verificaConsulta = (array) => {
    if(array.cancelada === true){
        return false
    }
    else{
        return true
    }
}

const consultaCancelada = (array) => {
    if(array.genero === "masculino"){
        console.log("Olá, Sr." + array.nome + ". Infelizmente, sua consulta marcada para o dia "
        + array.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
    }
    else{
        console.log("Olá, Sra." + array.nome + ". Infelizmente, sua consulta marcada para o dia "
        + array.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
    }
}
const verificaCancelada = (array) => {
    if(array.cancelada === true){
        return true
    }
    else{
        return false
    }
}

const consultasmarcadas = consultas.filter(verificaConsulta)
const consultascanceladas = consultas.filter(verificaCancelada)
console.log(consultasmarcadas.forEach(consultaMarcada))
console.log(consultascanceladas.forEach(consultaCancelada))

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function extrato(array, i){
    
    if(i >= array.length){
        console.log(array)
        return 0
    }
    for(let cont = 0; cont < array[i].compras.length; cont++){
        array[i].saldoTotal -= array[i].compras[cont]
    }
    extrato(array, i + 1)
}

extrato(contas, 0)
*/