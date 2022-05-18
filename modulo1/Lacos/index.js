//1

const seusPets = Number(prompt("Quantos pets você tem?"));
const pets = []
if (pets === 0) {
    console.log("Que pena!Você poderia adotar um!");
} else {
    let nomePet
    for (let i = 0; i < pets; i++) {
        nomeSeuPet = prompt("Qual o nome dos seus pets?")
        pets.push(nomeSeuPet)
    }
}
console.log(seusPets)

//2a
const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]
const arrayA = (array) => {
    for (let valor of array)
        console.log(valor)
}
//b
const arrayB = (array) => {
    for (let valor of array){ 
    let valor1 = +valor
        console.log(valor1/10)
 }
 }
 //c
 const arrayC = (array) => {
     const arrayPar = []
    for (let valor of array){ 
    let valor2 = + valor
    if(valor2 %2 ===0){
arrayPar.push(valor2)
     }
 }
 console.log(arrayPar)
 }
 arrayC(arrayOriginal)
//d 
const arrayD = (array) => { 
const arrayElemento = []
for(let i=0 ; i < array.length; i++){
let valorArray = `O elemento do index ${i} é ${array[i]}`
arrayElemento.push(valorArray)
}
console.log(arrayElemento)
}
arrayD(arrayOriginal)

//e
const arrayE = (array) =>{
    let valorMaximo = array[0]
    let valorMinimo = array[0]
    for (let valor of array){
if(valor>valorMaximo){ 
    valorMaior = valor
    }
    if(valor<valorMenor){
        valorMenor=valor
    }
 }
 console.log(`o valor maior é ${valorMaior} e o valor menor é ${valorMenor}`)
  }
  arrayE(valorOriginal)
