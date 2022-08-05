let btn1 = document.getElementById('btn1')

btn1.addEventListener('click', inicia)

function inicia() {
    let num
    while (!num) {
        num = prompt('Digite um número?')
        if (!num || isNaN(Number(num))) {
            alert('Por favor, informe um número válido!')
            num = undefined
        }
    }
    num = Number(num)

    alert(`Antes de ${num}, temos o número ${num -1}.
Depois de ${num}, temos o número ${num +1}.`)

}