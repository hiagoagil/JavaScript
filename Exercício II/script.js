function carregar  () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if(hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = '1manha.png'
        document.body.style.background = '#fda973'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde!
        img.src = '2tarde.png';
        document.body.style.background = '#fe6100'  
        
    } else {
        // boa noite!
        img.src = '3noite.png'
        document.body.style.background = '#7e5f93'
    }
    var imagem = window.Element.getElementById('foto')
    
    
}
