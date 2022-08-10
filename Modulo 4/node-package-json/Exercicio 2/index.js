
const calculo = process.argv[2]
const numero1 = +process.argv[3]
const numero2 = +process.argv[4]

const resposta = (operacao, numero1, numero2) => {
    switch(operacao){
        case "soma":
         return numero1 + numero2
            
        case "sub":
         return numero1 - numero2
            
        case "mult":
        return numero1 * numero2
            
        case "div":
        return numero1 / numero2      
    }
}
console.log(resposta(calculo, numero1, numero2));