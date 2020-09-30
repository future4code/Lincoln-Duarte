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

if (confirm ("Quer iniciar uma nova rodada?")){
   let i = 1;
   let player = [comprarCarta(), comprarCarta()];
   let computer = [comprarCarta(), comprarCarta()];
   //Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente
   while (player[0].valor === 11 && player[1].valor === 11){
      player = [comprarCarta(), comprarCarta()];
   }

   while (computer[0].valor === 11 && computer[1].valor === 11){
      computer = [comprarCarta(), comprarCarta()];
   }
   //valor da soma das cartas dos jogadores
   let usuarioValor = player[0].valor + player[1].valor;
   let computadorValor = computer[0].valor + computer[1].valor;
   //verifica se o jogo continua
   //Usuario possivelmente ganha
   if (usuarioValor === 21 && computadorValor !== 21 ){
      //loop do computador
      while (computadorValor < 21){
         computer.push(comprarCarta());
         i++;
         computadorValor += computer[i].valor;
      }
      //empate
      if (usuarioValor === 21 && computadorValor === 21 ){
         alert("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". Empate!");
         console.log("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". Empate!");
      }
      //usuario ganha
      else{
         alert("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". O usuário ganhou!");
         console.log("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". O usuário ganhou!");
      }
   }
   //jogo termina em empate
   else if (usuarioValor === 21 && computadorValor === 21 ){
      alert("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". Empate!");
      console.log("Suas cartas são" + player[0].texto + " " + player[1].texto + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são " + computer[0].texto + " " + computer[1].texto + ". A pontuação do computador é " + computadorValor + ". Empate!");
   }
   //jogo continua 
   else{
      //loop do usuario
      while(usuarioValor < 21){
         let computercards = " "
         let playercards = " "
         for(let i = 0; i < player.length; i++){
            playercards += player[i].texto + " " 
         }
         for(let i = 0; i < computer.length; i++){
            computercards += computer[i].texto + " " 
         }
         if (confirm("Suas cartas são" + playercards + ". A carta revelada do computador é " + computer[0].texto + ". " + "Deseja comprar mais uma carta?")){
            player.push(comprarCarta())
            usuarioValor = 0
            for (let carta = 0; carta < player.length; carta++){
               usuarioValor += player[carta].valor
            }
            var temporario = usuarioValor
         }

         else {
            temporario = usuarioValor
            usuarioValor = 21
         }
      }
      usuarioValor = temporario
      //loop do computador
      while(computadorValor < usuarioValor && computadorValor < 21 && usuarioValor < 21){
         computer.push(comprarCarta())
         computadorValor = 0
         for (let carta = 0; carta < computer.length; carta++){
            computadorValor += computer[carta].valor
         }
      }
      //Final do game
      if(usuarioValor > computadorValor && usuarioValor <= 21 || computadorValor > 21 && usuarioValor <= 21){
         let computercards = " "
         let playercards = " "
         for(let i = 0; i < player.length; i++){
            playercards += player[i].texto + " " 
         }
         for(let i = 0; i < computer.length; i++){
            computercards += computer[i].texto + " " 
         }
         console.log("Suas cartas são" + playercards + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são" + computercards + ". A pontuação do computador é " + computadorValor + ". "  + "O usuário ganhou!");
      }
      else if(usuarioValor < computadorValor && computadorValor <= 21 || usuarioValor > 21 && computadorValor <= 21){
         let computercards = " "
         let playercards = " "
         for(let i = 0; i < player.length; i++){
            playercards += player[i].texto + " "
         }
         for(let i = 0; i < computer.length; i++){
            computercards += computer[i].texto + " "
         }
         console.log("Suas cartas são" + playercards + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são" + computercards + ". A pontuação do computador é " + computadorValor + ". "  + "O computador ganhou!");
      }
      else{
         let computercards = " "
         let playercards = " "
         for(let i = 0; i < player.length; i++){
            playercards += player[i].texto + " " 
         }
         for(let i = 0; i < computer.length; i++){
            computercards += computer[i].texto + " " 
         }
         console.log("Suas cartas são" + playercards + ". Sua pontuação é " + usuarioValor + ". As cartas do computador são" + computercards + ". A pontuação do computador é " + computadorValor + ". "  + "Empate!");
      }
   }
}

else{
   console.log("O jogo acabou");
}
