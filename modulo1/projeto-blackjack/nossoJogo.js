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

console.log("Boas vindas ao jogo BlackJack!")


const usuario = {
   cartas1: comprarCarta(),
   cartas2: comprarCarta(),
}


const pComputador = {
   cartas1: comprarCarta(),
   cartas2: comprarCarta(),

}

const pontuaUsuario = usuario.cartas1.valor + usuario.cartas2.valor
const pontuaPc = pComputador.cartas1.valor + pComputador.cartas2.valor

if (window.confirm("Vamos iniciar uma nova partida?") === true) {
   console.log(`Usuário -Cartas:${usuario.cartas1.texto},${usuario.cartas2.texto} - Pontuação${pontuaUsuario} `)
   console.log(`Computador - Cartas ${pComputador.cartas1.texto}, ${pComputador.cartas2.texto}- Pontuação${pontuaPc}`)

   if (pontuaPc > pontuaUsuario && pontuaPc <= 21) {
      console.log(`O adversario ganhou!!`)
   } else if (pontuaPc < pontuaUsuario && pontuaUsuario <= 21) {
      console.log(`Você ganhou!!`)


   } else { ("Empatou!")}
} else {
   console.log("O jogo acabou :(!")}

