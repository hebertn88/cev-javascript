//busca elementos
var iNum = document.getElementById('iNum')
var iCalc = document.getElementById('iCalc')
var dResp = document.getElementById('dResp')
var opt = document.getElementById('sel')
//add Listeners
iNum.addEventListener('keyup', ativaBtn)
iCalc.addEventListener('click', calc)

function ativaBtn() {
    if (iNum.value.length > 0) {
        iCalc.disabled =  false
    } else {
        iCalc.disabled = true
    }
    if (opt.hidden == false) {
        opt.hidden = true
    }
}

function calc() {
    let num = Number(iNum.value)
    opt.innerHTML = ''

    let c = 1
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${num} X ${c} = ${num * c}`
        opt.appendChild(item) 
        c++
    }
    opt.hidden = false
}