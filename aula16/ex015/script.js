//get elements
let iNum = document.getElementById('iNum')
let listNum = document.getElementById('listNum')

let btnAd = document.getElementById('btnAd')
let btnFin = document.getElementById('btnFin')
let btnRein = document.getElementById('btnRein')

let dResp = document.getElementById('dResp')

//totalizadores
/*
qtd de itens
val maximo
val minimo
soma itens
media itens
*/
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
    }
}

btnAd.addEventListener('click', adNum)
function adNum(){
    numeros.itens.push(Number(iNum.value))
    iNum.value = null
    console.log(numeros.itens)

}
btnFin.addEventListener('click', max)
function max() {
    console.log('max: ' + numeros.max())
    console.log('min: ' + numeros.min())
    console.log('soma: ' + numeros.soma())
    console.log('media: ' + numeros.media())
}