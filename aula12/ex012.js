let agora = new Date()

let hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde')
} else if (hora > 24) {
    console.log('Hora Inválida')
} else {
    console.log('Boa noite')
}