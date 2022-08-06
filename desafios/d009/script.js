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

function toBRL(v) {
    if (isNaN(v)) {
        return false
    } else {
        return v.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
}

function inicia() {
    resp.innerHTML = ''

    let nome
    while (!nome){
        nome = prompt(`Qual é o nome do funcionário?`)

        if (nome.length == 0) {
            alert('Por favor, informe o produto!')
        }
    }

    let val
    while (!isNumber(val)){
        val = prompt(`Qual é o salário de ${nome}?`)

        if (!isNumber(val) || Number(val) <= 0) {
            alert('Por favor, informe um número válido!')
        } else {
            val = Number(val)
        }
    }

    let perc
    while (!isNumber(perc)){
        perc = prompt(`O salário de ${nome} será reajustado em que porcentagem?`)

        if (!isNumber(perc) || Number(perc) <= 0) {
            alert('Por favor, informe um número válido!')
        } else {
            perc = Number(perc)
        }
    }

    let h1 = document.createElement('h1')
    let pIni = document.createElement('p')
    let pAum = document.createElement('p')
    let pFin = document.createElement('p')

    let aum = Number(val * (perc / 100))

    h1.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>`
    pIni.innerHTML = `<p>O salário inicial era de ${toBRL(val)}.</p>`
    pAum.innerHTML = `<p>Com o aumento de ${perc}%, o salário aumentará ${toBRL(aum)} no próximo mês.</p>`
    pFin.innerHTML = `<p>A partir daí, ${nome} passará a receber ${toBRL(val + aum)}.</p>`

    resp.appendChild(h1)
    resp.appendChild(pIni)
    resp.appendChild(pAum)
    resp.appendChild(pFin)

}

