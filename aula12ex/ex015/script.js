function verify() {

    let data = new Date()

    let ano = data.getFullYear()

    let fAno = document.getElementById('txtano')

    let res = document.getElementById('res')

    let img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('*ERRO* Verifique os dados')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''

        if (fsex[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'images/bbzinho.jpg')
                
            } else if (idade < 21) {

                img.setAttribute('src', 'images/mano.jpg')
                
            } else if (idade < 50) {

                img.setAttribute('src', 'images/homem.jpg')
                
            } else {

                img.setAttribute('src', 'images/idoso.jpg')
                
            }

        } else if (fsex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'images/bbzinha.jpg')
                
            } else if (idade < 21) {
                
                img.setAttribute('src', 'images/mina.jpg')
                
            } else if (idade < 50) {
                
                img.setAttribute('src', 'images/mulher.jpg')
                
            } else {
                
                img.setAttribute('src', 'images/idosa.jpg')
                
            }

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.style.textAlign = 'center'

        res.appendChild(img)
    }
}