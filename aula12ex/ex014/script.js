function load() {

let data = new Date()
let hora = data.getHours()

document.getElementById('msg')
document.getElementById('img')

    if (hora >= 1 && hora < 12) {
        document.body.style.backgroundColor = '#D1C090'
        msg.innerHTML = `Agora são ${hora} horas.`
    } else if (hora == 1) {
        document.body.style.backgroundColor = '#D1C090'
        msg.innerHTML = `Agora é ${hora} hora.`
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#A37662'
        msg.innerHTML = `Agora são ${hora} horas.`
        img.src = 'images/tarde.png'
    } else if (hora >= 18 && hora < 24) {
        document.body.style.backgroundColor = '#4A4B4C'
        msg.innerHTML = `Agora são ${hora} horas.`
        img.src = 'images/noite.png'
    }
}


