//1 a) "Matheus Nachtergaele","Virginia Cavendish", "Globo 14h"

//2 a)Juca, juba, jubo
//2 b)substitui o valor da chave

//3 false
/*
const pessoa = {
    nome: "Gabriela", 
    apelidos: ["Bibi", "By", "Bibs"], }

 function meusDados(infos){ 
console.log(`Eu sou ${infos.nome}, mas pode me chamar de:${infos.apelidos[0]},${infos.apelidos[1]},${infos.apelidos[2]}`)
  }

const nicks = { 
    ...pessoa,
    apelidos : ["Cabeça","Gabih","bee"]
  }
meusDados(pessoa)
*/
//2
const exercicio = { 
nome: "Gabi",
idade: 30,
profissao: "estudante",
}
const exercicio1 = { 
    nome: "Rafael",
    idade: 36,
    profissao: "data center tecnician",
 }

 function informacoes(myfuncao){ 
array1 = [exercicio.nome, exercicio.profissao]
    return informacoes
    }
console.log (exercicio.nome,exercicio.nome.length, exercicio.idade, exercicio.profissao,exercicio.profissao.length)
console.log(exercicio1.nome,exercicio1.nome.length, exercicio1.idade, exercicio1.profissao,exercicio1.profissao.length)

//3
let carrinho = []

let maca = { 
    nome: "Maçã", disponibilidade: true
}
let melancia = { 
melancia: "Melancia", disponibilidade: true

}
let kiwi = { 
   kiwi: "Kiwi", disponibilidade: true

}
const inserir = (frutas) => carrinho.push(frutas)
inserir(maca)
inserir(melancia)
inserir(kiwi)
console.log(carrinho)