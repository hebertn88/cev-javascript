let btn1 = document.getElementById('btn1')

btn1.addEventListener('click', inicia)

function inicia() {
    let nome
    while (!nome) {
        nome = prompt('Qual seu nome?')
        if (!nome) {
            alert('Por favor, informe seu nome!')
        }
    }

    let idade
    while (!idade) {
        idade = prompt('Qual a sua idade?')
        if (!idade || isNaN(Number(idade))) {
            alert('Por favor, informe sua idade!')
            idade = undefined
        }
    }

    alert(`Acabei de conher ${nome}, que tem ${idade} anos!`)

}