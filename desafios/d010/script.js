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

    let a
    while (!isNumber(a)) {
        a = prompt(`Qual é o valor de a?`)

        if (!isNumber(a)) {
            alert('Por favor, informe um número válido!')
        } else {
            a = Number(a)
        }
    }

    let b
    while (!isNumber(b)) {
        b = prompt(`Qual é o valor de b?`)

        if (!isNumber(b)) {
            alert('Por favor, informe um número válido!')
        } else {
            b = Number(b)
        }
    }

    let c
    while (!isNumber(c)) {
        c = prompt(`Qual é o valor de c?`)

        if (!isNumber(c)) {
            alert('Por favor, informe um número válido!')
        } else {
            c = Number(c)
        }
    }

    let h1 = document.createElement('h1')
    let pResp
    let d = (b ** 2) - (4 * a * c)

    h1.innerHTML = `<h1>Resolvendo Bhaskara</h1>`
    pResp = `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong>.</p>`
    pResp += `<p>O cálculo realizado será <strong>&#916; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong>.</p>`
    pResp += `<p>O valor calculado foi <strong><mark>&#916; = ${d}</mark></strong>.</p>`

    resp.appendChild(h1)
    resp.insertAdjacentHTML('beforeend', pResp)

}

