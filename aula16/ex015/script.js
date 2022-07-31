//get elements
let iNum = document.getElementById('iNum')
let listNum = document.getElementById('listNum')

let btnAd = document.getElementById('btnAd')
let btnFin = document.getElementById('btnFin')
let btnRein = document.getElementById('btnRein')

let dResp = document.getElementById('dResp')

//totalizadores
const numeros = {
    itens: [],
    qtd: function () {
        return this.itens.length;
    },
    max: function () {
        let m = 0
        for (let c = 0; c < this.itens.length; c++) {
            if (this.itens[c] > m) {
                m = this.itens[c]
            }
        }
        return m
    },
    min: function () {
        let m = 101
        for (let i in this.itens) {
            if (this.itens[i] < m) {
                m = this.itens[i]
            }
        }
        return m
    },
    soma: function () {
        let t = 0
        for (let i in this.itens) {
            t += this.itens[i]
        }
        return t
    },
    media: function () {
        return this.soma() / this.itens.length
    },
}

btnAd.addEventListener('click', adNum)
function adNum(){
    let num = Number(iNum.value)
    //verifica se valor foi informado e se e valido
    if (num.length == 0 || num < 1 || num > 100) {
        alert('Informe um número válido!')
    //verifica se valor ja existe
    } else if (numeros.itens.indexOf(num) != -1) {
        alert('Número adicionado anteriormente!')
    } else {
        numeros.itens.push(num) //adiciona item

        let op = document.createElement('option')
        op.text = `Valor ${num} adicionado.`
        listNum.appendChild(op)

        if (listNum.hidden) {
            listNum.hidden = false
        }

        if (btnFin.disabled) {
            btnFin.disabled = false
        }

        if (btnRein.disabled) {
            btnRein.disabled = false
        }

        iNum.value = ''
    }

}

btnFin.addEventListener('click', max)
function max() {
    //cria elementos
    let pLen = document.createElement('p')
    let pMax = document.createElement('p')
    let pMin = document.createElement('p')
    let pSoma = document.createElement('p')
    let pMed = document.createElement('p')

    //insere mensagem aos elementos
    pLen.innerHTML = `Ao todo temos ${numeros.itens.length} números cadastrados.`
    pMax.innerHTML = `O maior valor informado foi o ${numeros.max()}.`
    pMin.innerHTML = `O menor valor informado foi o ${numeros.min()}.`
    pSoma.innerHTML = `Somando todos os valores, temos ${numeros.soma()}.`
    pMed.innerHTML = `A média dos valores digitados é ${numeros.media()}.`

    //adiciona elementos a pagina
    dResp.appendChild(pLen)
    dResp.appendChild(pMax)
    dResp.appendChild(pMin)
    dResp.appendChild(pSoma)
    dResp.appendChild(pMed)

    //torna visivel
    dResp.hidden = false
}

btnRein.addEventListener('click', reinicia)
function reinicia() {
    numeros.itens = [] //limpa numeros.itens
    dResp.hidden = true //esconde dResp
    dResp.innerHTML = '' //limpa dResp
    listNum.hidden = true //esconde listNum
    listNum.innerHTML = '' //limpa listNum
    btnFin.disabled = true //desabilita btnFin
    btnRein.disabled = true //desabilita btnRein
}