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
let cartasZero
let cartasUm
let cartasDois
let cartasTres

console.log("Boas vindas ao jogo Black Jack!")
if (window.confirm("Vamos iniciar uma nova partida?")) {
   for(let i = 0; i<2; i++){ 
   cartasZero = comprarCarta()
   cartasUm   = comprarCarta()
   cartasDois = comprarCarta()
   cartasTres = comprarCarta()
 }
} else { window.alert("O jogo acabou :(!") }
let valorUsuario = cartaZero.valor+cartaUm.valor
let valorComputador = cartaDois.valor+cartaTres.valor

console.log(`Usuário -Cartas:${cartasZero.texto},${cartasUm.texto} - Pontuação${valorUsuario} Computador - Cartas ${cartasDois.texto}, ${cartasTres.texto} - Pontuação${valorComputador}`)

if(valorComputador > valorUsuario && valorComputador <= 21){ 
   console.log(`O adversario ganhou!!`)
}else if (valorComputador < valorUsuario && valorUsuario <= 21){
console.log(`Você ganhou!!`)
}else{
   console.log(`Empatou!`)
 }

