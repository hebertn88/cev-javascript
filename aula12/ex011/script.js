
var btnAlteraHora = document.getElementById('btnAlteraHora')
var btnHoraAtual = document.getElementById('btnHoraAtual')

btnAlteraHora.addEventListener('click', alteraHora)
btnHoraAtual.addEventListener('click', horaAtual)



function loadStyle(hora = new Date().getHours()) {

    var msg = window.document.querySelector('p#msg')
    var img = window.document.querySelector('img#img')
    var body = window.document.querySelector('body')

    if (hora >= 0 && hora < 12) { 
    //manha
    img.setAttribute('src', 'manha.png')
    msg.innerHTML  = `Bom dia, agora são ${hora} horas!`
    body.style.backgroundColor = '#CCCCFF'
    } else if (hora < 19) {
    //tarde
    img.setAttribute('src', 'tarde.png')    
    msg.innerHTML  = `Boa tarde, agora são ${hora} horas!`
    body.style.backgroundColor = '#666699'
    } else {
    //noite
    img.setAttribute('src', 'noite.png')    
    msg.innerHTML  = `Boa noite, agora são ${hora} horas!`
    body.style.backgroundColor = '#042D53'
    }
    var htemp = document.getElementById('txtHora')
    htemp.value = ''

}

function alteraHora() {
    var txtHora = document.getElementById('txtHora')
    txtHora = Number(txtHora.value)

    if (txtHora >= 0 && txtHora < 23) {
        console.log('entrou')

        loadStyle(txtHora)
    }
}

function horaAtual() {
    loadStyle()
}



