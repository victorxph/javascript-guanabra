let a = document.getElementById('area')

        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        
        function clicar() {
            a.innerText = 'Clicou!'
            a.style.background = 'red'
            a.style.fontWeight = 'normal'

        }

        function entrar() {
            a.innerText = `Entrou

                            Lá ele!`
            a.style.background = 'green'
            a.style.fontWeight = 'normal'


        }

        function sair() {
            a.innerText = 'Saiu!'
            a.style.background = 'lightgreen'
            a.style.fontWeight = 'bold'

        }