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

    let m
    while (!isNumber(m)){
        m = prompt(`Digite uma distância em metros(m)`)

        if (!isNumber(m) || Number(m) <= 0) {
            alert('Por favor, informe o número válido!')
        } else {
            m = Number(m)
        }
    }

    let h1 = document.createElement('h1')
    h1.innerHTML = `<p>A distância de ${m} metros, corresponde a...</h1>`

    let km = document.createElement('p')
    km.innerHTML = `<p>${m / 1000} quilômetros (Km)</p>`

    let hm = document.createElement('p')
    hm.innerHTML = `<p>${m / 100} hectômetros (Hm)</p>`

    let dam = document.createElement('p')
    dam.innerHTML = `<p>${m / 10} quilômetros (Dam)</p>`

    let dm = document.createElement('p')
    dm.innerHTML = `<p>${m * 10} decímetros (dm)</p>`

    let cm = document.createElement('p')
    cm.innerHTML = `<p>${m * 100} centímetros (cm)</p>`
    
    let mm = document.createElement('p')
    mm.innerHTML = `<p>${m * 1000} milímetros (mm)</p>`
    
    resp.appendChild(h1)
    resp.appendChild(km)
    resp.appendChild(hm)
    resp.appendChild(dam)
    resp.appendChild(dm)
    resp.appendChild(cm)
    resp.appendChild(mm)

}

