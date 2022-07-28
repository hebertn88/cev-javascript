var btnVerif = document.getElementById('btnVerif')
btnVerif.addEventListener('click', verificar)

var txtAno = document.getElementById('txtAno')
txtAno.setAttribute('max', new Date().getFullYear())

var p = document.createElement('p')
divResp.appendChild(p)

var img = document.createElement('img')
divResp.appendChild(img)

function verificar(){
    //window.alert('entrou')
    var rSexo = document.getElementsByName('rSexo')
    var anoAtual = new Date().getFullYear()
    var divResp = document.getElementById('divResp')

    if (txtAno.value.length == 0 || txtAno.value > anoAtual) {
        window.alert('Corrija as informações e tente novamente!')
    } else {
        var idade = anoAtual - txtAno.value
        //alert(idade)

        if (rSexo[0].checked) {
            //masculino
            if (idade <= 3){
                //bebe
                p.innerHTML = `Identificamos um <strong>Bebê</strong> do sexo <strong>${rSexo[0].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'bebe_h.png')
            } else if (idade <= 10) {
                //crianca
                p.innerHTML = `Identificamos uma <strong>Criança</strong> do sexo <strong>${rSexo[0].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'crianca_h.png')
            } else if (idade <= 25) {
                //jovem
                p.innerHTML = `Identificamos um <strong>Jovem</strong> do sexo <strong>${rSexo[0].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'jovem_h.png')
            } else if (idade <= 50) {
                //adulto
                p.innerHTML = `Identificamos um <strong>Adulto</strong> do sexo <strong>${rSexo[0].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'adulto_h.png')
            } else {
                //senior
                p.innerHTML = `Identificamos um <strong>Senhor</strong> do sexo <strong>${rSexo[0].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'senior_h.png')
            }
        } else {
            //feminino
            if (idade <= 3){
                //bebe
                p.innerHTML = `Identificamos uma <strong>Bebê</strong> do sexo <strong>${rSexo[1].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade <= 10) {
                //crianca
                p.innerHTML = `Identificamos uma <strong>Criança</strong> do sexo <strong>${rSexo[1].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'crianca_m.png')
            } else if (idade <= 25) {
                //jovem
                p.innerHTML = `Identificamos uma <strong>Jovem</strong> do sexo <strong>${rSexo[1].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade <= 50) {
                //adulto
                p.innerHTML = `Identificamos um <strong>Adulto</strong> do sexo <strong>${rSexo[1].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'adulto_m.png')
            } else {
                //senior
                p.innerHTML = `Identificamos uma <strong>Senhora</strong> do sexo <strong>${rSexo[1].value}</strong> com <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'senior_m.png')
            }
        }
    }

}