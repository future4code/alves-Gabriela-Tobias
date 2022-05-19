//1)Vão aparecer tres arrays com os nomes e apelidos de cada um

//2)Vão aparecer apenas os nomes em uma array

//3)Vão aparecer todos, menos o nome e apelido da  leticia chijo

//******************Exercicios de escrita


1
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//a)
//   const infoPets = pets.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(infoPets)
// //b)

// const sarxixa = pets.filter((nomes) => { 
// return nomes.raca === "Salsicha"
// })
// const sarxixa2 = sarxixa.map((nomes1) => {
// return nomes1.nome
// }
// )
// console.log(sarxixa2)

//c
// const pudo = pets.filter((nomes) => {
//     return nomes.raca === "Poodle"
// }).map((nomes) => {
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomes.nome}`
// })

//    console.log(pudo)



// //  //2
//  const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// //a
// //   const mercadinho = produtos.map((item, index, array) => {
// //      return item.nome
// //   })
// //   console.log(mercadinho)

//b não soube fazer



// //c)
// // const produtosMercado = produtos.filter((produto) => {
// //     return produto.categoria.toLowerCase() === "bebidas"
// // })
// // console.log(produtosMercado)

// //d)
// // const produtosMercado2 = produtos.filter((produto) => {
  
// //    return produto.nome.includes(`Ypê`)
// // })
// // console.log(produtosMercado2)

//e)
// const produtosMercado3 = produtos.filter((produtinho) => {
// return produtinho.nome.includes(`Ypê`)
//  }).map((produtinho) =>{ 
// return `Você ganhou um cupom para marca ${produtinho.nome} vai para o valor de ${produtinho.preco}.`
//  })
// console.log(produtosMercado3)
