//inicia variaveis dos elementos
var iInicio = document.getElementById('iInicio')
var iFim = document.getElementById('iFim')
var iPasso = document.getElementById('iPasso')
var iContar = document.getElementById('iContar')
var dResp = document.getElementById('dResp')

//adiciona listeners
iInicio.addEventListener('change', alteraInicio)
iContar.addEventListener('click', contar)

//cria elementos para resposta
msg = document.createElement('p')

//adiciona elementos criados na pagina
dResp.appendChild(msg)

//funcoes
function alteraInicio() {
    iFim.value = ''
    iFim.setAttribute('min', iInicio.value + 1 )
}

function contar() {
    var inicio = Number(iInicio.value)
    var fim = Number(iFim.value)
    var passo = Number(iPasso.value)

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('Preencha todos os campos!')
    } else {
        if (inicio < fim) {
            if (passo > (fim - inicio)) {
                alert('Passo muito grande!')
            } else {
                msg.innerHTML = 'Contando...<br><br>'
                var c = inicio
                for (inicio;(c<=fim);c += passo) {
                    //alert('teste')
                    msg.innerHTML += `${c}... `
                }
            }
        } else if (fim < inicio) {
            if (passo > (inicio - fim)) {
                alert('Passo muito grande!')
            } else {
                msg.innerHTML = 'Contando...<br><br>'
                var c = inicio
                for (inicio;(c >= fim);c -= passo) {
                    //alert('teste')
                    msg.innerHTML += `${c}... `
                }
            }
        }
    }
}
