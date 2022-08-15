// Typescript lista 

// exercicio 1

// const exercicio1 = (nome: string, dataNascimento: string): string => {
//     const [dia, mes, ano] = dataNascimento.split("/");
//     const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
//     return frase;
//   };

//   exercicio 2

//  exercicio 3

//  enum GENERO {
//     ACAO = "ação",
//     DRAMA = "drama",
//     COMEDIA = "comédia",
//     ROMANCE = "romance",
//     TERROR = "terror"
//   }
//   type filme = {
//     nome: string
//     anoLancamento: number
//     genero: GENERO
//     pontuacao?: number
//   }

//   const exercicio3 = (
//     nome: string,
//     ano: number,
//     genero: GENERO,
//     nota?: number
//   ): filme => {
//     if (nota) {
//       return {
//         nome: nome,
//         anoLancamento: ano,
//         genero: genero,
//         pontuacao: nota
//       }
//     } else {
//       return {
//         nome: nome,
//         anoLancamento: ano,
//         genero: genero
//       }}}
  
//   exercicio 4

//   type colaboradores = {
//     nome: string;
//     salário: number;
//     setor: SETORES;
//     presencial: boolean;
//   };
  
//   const listaColaboradores: colaboradores[] = [
//     { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
//     { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
//     { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
//     { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
//     { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
//     { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
//     { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
//   ];

//   Não consegui terminar

//   exercicio 7

//   const ajustaPreco = (preco: number): string => {
//     const valorAjustado: string = preco.toFixed(2).replace(".", ",");
//     return "R$ " + valorAjustado
//   }
  
//   type produto = {
//     nome: string;
//     quantidade: number;
//     valorUnitario: number | string;
//   };
  
//   const estoque: produto[] = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
//   ];
  
//   const exercicio7 = (lista: produto[]): produto[] => {
//     lista.forEach(
//       (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
//     )
  
//     const listaOrdernada: produto[] = 
//     lista.sort(
//     (a, b) => a.quantidade - b.quantidade
//     )
  
//     return listaOrdernada
//   }

// exercicio 8


//   exercicio 9

//   const exercicio9 = (palavra: string): number => {
//     const quantidadeLetras = palavra.length;
  
//     if (quantidadeLetras === 0) {
//       return 1
//     }
//     let resultado = 1
//     for (let i = quantidadeLetras; i > 0; i--) {
//       resultado *= i
//     }
//     return resultado
//   }

//   exercicio10 e 11 
//   Não consegui fazer :((

  

