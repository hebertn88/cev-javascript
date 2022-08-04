let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

btn1.addEventListener('click', fbtn1)
btn2.addEventListener('click', fbtn2)
btn3.addEventListener('click', fbtn3)

function fbtn1() {
    alert('Você clicou no 1º botão!')
}

function fbtn2() {
    alert('Você clicou no 2º botão!')
}

function fbtn3() {
    alert('Você clicou no 3º botão!')
}