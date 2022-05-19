//1a)Ele pergunta um numero ao usuário e faz uma condição de divisão de x %2 = 0
//b)se o numero for igual ou acima de seis imprime "Passou no teste"
//c)5 ou abaixo imprime "Não passou no teste"


//2a) para precificar as frutas
//b)O preço da fruta Maçã é R$2,25
//c)Se for retirado o break o preço muda de 5,50 para 5

//3a)pedindo um número ao usuário
//b)Se 10 passou no teste, -10 não aparece nada
//c) sim aparece um erro, em vez de mensagem o console tem que aparecer assim
//console.log(numero)

//******************************** */
//Exercicio de escrita 1
/*
let seuNome = prompt("Qual seu nome?");
let suaIdade = Number(prompt("Qual sua idade?"));

function comparaIdade (idade) {
    if (idade>18){
        console.log("Você pode dirigir!");
    }
    else {
console.log("Você não pode dirigir!");
 }
 }
 comparaIdade(suaIdade)
*/

//Exercicio de escrita 2
/*
let turnoEscolar = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

function comparaTurno (escolar){
if(escolar === "V" ){
    console.log("Boa tarde!");
}
if(escolar === "M" ){
    console.log("Bom Dia!");
    }
    if(escolar === "N" ){
        console.log("Boa Noite!");
    }
}

comparaTurno(turnoEscolar)
*/

//3
/*
const turnoEscolar = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

const comparaTurno = (escolar) => {

    switch (escolar) {
        case 'M':
            console.log("Bom dia!");
            break;
                case 'V':
                    console.log("Boa tarde!");
                    break;
                case 'N':
                    console.log("Boa noite!");
                    break;
             }
              }


 comparaTurno(turnoEscolar)
 */

 //4
/*
let generoFilme = prompt("Qual o genero do filme?").toLowerCase()
let valorIngresso = +prompt("Qual valor?")


if(generoFilme === "fantasia" ){
   console.log("Bom filme!"); 

   }else {
   console.log("Escolha outro filme :(");
}
console.log(generoFilme)

if (valorIngresso <= 15){ 
   console.log("Bom filme");
    }else{
        console.log("Escolha outro filme :(")
    }

    console.log(valorIngresso)
*/

