/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/

console.log("Bem vindo  ao jogo de Blackjack");
if(confirm("Quer iniciar uma nova rodada?")){
   //Cartas do usuario
   const usuario = [comprarCarta(), comprarCarta()];
   const usuarioValor = usuario[0].valor + usuario[1].valor;
   console.log("Usuário - cartas: " + usuario[0].texto + " " + usuario[1].texto + " - pontuação " + (usuario[0].valor + usuario[1].valor));
   //Cartas do computador
   const computador = [comprarCarta(), comprarCarta()];
   const computadorValor = computador[0].valor + computador[1].valor;
   console.log("Computador - cartas: " + computador[0].texto + " " + computador[1].texto + " - pontuação " + (computador[0].valor + computador[1].valor));
   //Decisão do game
   if(usuarioValor > computadorValor){
      console.log("O usuário ganhou!");
   }
   else if(usuarioValor < computadorValor){
      console.log("O computador ganhou!");
   }
   else{
      console.log("Empate!");
   }
}
else{
   console.log("O jogo acabou");
}