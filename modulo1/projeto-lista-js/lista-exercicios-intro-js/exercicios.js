// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(valorA, valorB) {
  valorA = prompt("Digite a altura")
  valorB = prompt("Digite a largura")
const area = valorA * valorB
console.log(area)
}

// EXERCÍCIO 02

function imprimeIdade() {
let anoAtual = prompt("Escreva o ano em que estamos")
let anoNascimento =  prompt("Escreva sua data de nascimento")
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc2 = peso / (altura*altura)
console.log(imc2)
return imc2
}


// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Sua idade?")
  const email = prompt("Seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

 //EXERCÍCIO 05
 
function imprimeTresCoresFavoritas() {
const cor0 = prompt("digite uma cor")
const cor1 = prompt("digite outra cor")
const cor2 = prompt("digite mais uma cor!")
const cores = [cor0,cor1,cor2]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const lucro = custo / valorIngresso
return lucro 
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const dados = string1 > string2
return dados
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let ex1 = array.length
let ex2 = array[0]
array[0] = array[ex1 -1]
array[ex1 -1] = ex2
return array
  }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
 }
// EXERCÍCIO 13
function checaRenovacaoRG() {
let anoAtual = prompt("Em que ano estamos?")
let anoNasc = prompt("Em que ano você nasceu?")
let rg = prompt("Ano que seu RG foi emitido")
let idade = anoAtual - anoNasc
let emissao
idade ()
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}