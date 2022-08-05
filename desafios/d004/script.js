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
    let nome = ''
    while (!nome.length > 0) {
        nome = prompt('Que produto você está comprando?')

        if (!nome.length > 0) {
            alert('Por favor, informe um produto!')
        }
    }

    let val
    while (!isNumber(val)){
        val = prompt(`Quanto custo o ${nome} que você está comprando?`)

        if (!isNumber(val)) {
            alert('Por favor, informe o valor!')
        } else {
            val = Number(val)
        }
    }
    

    let pag
    while (!isNumber(pag)){
        pag = prompt(`Qual foi o valor que você deu para pagar o ${nome}?`)

        if (!isNumber(pag)) {
            alert('Por favor, informe o valor!')
        } else {
            pag = Number(pag)
        }

        if (pag < val) {
            alert(`Você não pode pagar o ${nome} com apenas ${toBRL(pag)}.
Você precisa de pelo menos ${toBRL(val)}!`)
            pag = undefined
        }
    }

    alert(`Você comprou ${nome} que custou ${toBRL(val)}.
Deu ${toBRL(pag)} em dinheiro e vai receber ${toBRL(pag - val)} de troco.
Volte sempre!`)

}
