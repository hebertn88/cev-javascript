let resp = document.getElementById('resp')

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', inicia)

function isNumber(n) {
    if (isNaN(Number(n)) || n.length == 0) {
        return false
    } else {
        return true
    }
}

function inicia() {
    resp.innerHTML = ''

    let us
    while (!isNumber(us)){
        us = prompt(`Antes de mais nada. Quanto está a cotação do Dólar agora?`)

        if (!isNumber(us) || Number(us) <= 0) {
            alert('Por favor, informe o número válido!')
        } else {
            us = Number(us)
        }
    }

    let br
    while (!isNumber(br)){
        br = prompt(`Quantos R$ você tem na carteira?`)

        if (!isNumber(br) || Number(br) <= 0) {
            alert('Por favor, informe o número válido!')
        } else {
            br = Number(br)
        }
    }

    let h1 = document.createElement('h1')
    h1.innerHTML = `<h1>Com o dólar valendo R$ ${us}, tendo R$ ${br.toFixed(2)} você pode comprar US$ ${(br / us).toFixed(2)}!</h1>`

    resp.appendChild(h1)

}

