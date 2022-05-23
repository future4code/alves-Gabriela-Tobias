// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((value) => {
    if (value % 2 === 0)
      return value
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((value) => { if (value % 2 === 0) return value }).map((value) => value ** 2)
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMaior) {
      numeroMaior = array[i]
    }
  }
  return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let nMaior
  let nMenor
  if (num1 > num2) {
    nMaior = num1, nMenor = num2
  } else { nMaior = num2, nMenor = num1 }
  let divisorNumero
  if (nMaior % nMenor === 0) { divisorNumero = true }
  else { divisorNumero = false }
  let objetoDoisNumeros = {
    maiorNumero: nMaior,
    maiorDivisivelPorMenor: divisorNumero,
    diferenca: nMaior - nMenor
  }
  return objetoDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let numerosPares = [ ]
for (let i = 0 ;i<=2*(n-1); i++)
if(i%2===0){
  numerosPares.push(i)
}
return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}