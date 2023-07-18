let agora = new Date()

// let diaSem = 7
let diaSem = agora.getDay()

let hj = 'Hoje é '

// 0 = Domingo
// 1 = Segunda
// 2 = Terça
// 3 = Quarta
// 4 = Quinta
// 5 = Sexta
// 6 = Sábado

console.log(diaSem)

switch (diaSem){
    case 0:
        console.log(hj + 'Domingo')
        break

    case 1:
        console.log(hj + 'Segunda')
        break

    case 2:
        console.log(hj + 'Terça')
        break

    case 3:
        console.log(hj + 'Quarta')
        break

    case 4:
        console.log(hj + 'Quinta')
        break

    case 5:
        console.log(hj + 'Sexta')
        break

    case 6:
        console.log(hj + 'Sábado')
        break
    
    default:
        console.log('*ERRO* Dia inválido')
        break
        
}