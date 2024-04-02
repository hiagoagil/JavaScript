function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('Erro | Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','./2Criancahomem.png')
            } else if ( idade <30) {
                // Jovem
                img.setAttribute('src','./8jovemhomem.png')
            } else if ( idade <50 ) {
                // adulto
                img.setAttribute('src','./3Adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','./6Idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','./1Criancamulher.png')
            } else if ( idade <30) {
                // Jovem
                img.setAttribute('src','./7jovemmulher.png')
            } else if ( idade <50 ) {
                // adulto
                img.setAttribute('src','./4Adultomulher.png')
            } else  {
                //idoso
                img.setAttribute('src','./5Idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}