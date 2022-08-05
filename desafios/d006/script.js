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
        m = prompt(`Digite uma temperatura em °C (Celsius)`)

        if (!isNumber(m) || Number(m) <= 0) {
            alert('Por favor, informe o número válido!')
        } else {
            m = Number(m)
        }
    }

    let h1 = document.createElement('h1')
    h1.innerHTML = `<p>A temperatura de ${m}°C, corresponde a...</h1>`

    let k = document.createElement('p')
    k.innerHTML = `<p>${(m + 273.15).toFixed(2)}°K (Kelvin)</p>`

    let f = document.createElement('p')
    f.innerHTML = `<p>${((m  * 1.8) + 32).toFixed(2)}°F (Fahrenheit)</p>`

    resp.appendChild(h1)
    resp.appendChild(k)
    resp.appendChild(f)

}

