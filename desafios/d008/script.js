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

    let prod
    while (!prod){
        prod = prompt(`Qual é o produto que você está comprando?`)

        if (prod.length == 0) {
            alert('Por favor, informe o produto!')
        }
    }

    let val
    while (!isNumber(val)){
        val = prompt(`Qual é o preço do ${prod}?`)

        if (!isNumber(val) || Number(val) <= 0) {
            alert('Por favor, informe um número válido!')
        } else {
            val = Number(val)
        }
    }

    let desc = Number((val * 0.1).toFixed(2))
    let h1 = document.createElement('h1')
    let vOrig = document.createElement('p')
    let vDesc = document.createElement('p')
    let vFin = document.createElement('p')

    h1.innerHTML = `<h1>Calculando desconto de 10% para ${prod}...</h1>`
    vOrig.innerHTML = `<p>O preço original era de ${toBRL(val)}.</p>`
    vDesc.innerHTML = `<p>Você acaba de ganhar 
    ${toBRL(desc)} de desconto (-10%).</p>`
    vFin.innerHTML = `<p>No final, você pagará ${toBRL(val - desc)} no produto ${prod}.</p>`

    resp.appendChild(h1)
    resp.appendChild(vOrig)
    resp.appendChild(vDesc)
    resp.appendChild(vFin)

}

