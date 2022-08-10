/* a) Para simular a chegada de uma requisição, passaremos
valores de entrada pelo terminal, que serão acessados
no código pela propriedade process.argv*/
// 1 b) e c)
const nome = process.argv[2]
const idade = process.argv[3]
const idadeSete = +process.argv[3] + 7

const resposta = (nome,idade) =>{
    if(nome && idade){
        return console.log(`Olá, ${nome}!, Você tem ${idade} anos.Em sete anos você terá ${idadeSete}.`)
    }else{
        return "#"
    }
}
console.log("Olá,", process.argv[2],"Você tem", process.argv[3], "anos.", "Em sete anos você terá", +process.argv[3] + +7)
resposta(nome,idade);


