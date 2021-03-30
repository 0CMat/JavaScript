function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Horário: ${hora}:${minutos}  `

    if(hora >= 05 && hora < 12){
        msg.innerHTML += `-  Bom Dia!`
        img.src = 'imgs/manha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `-  Boa Tarde!`
        img.src = 'imgs/tarde.png'
        document.body.style.background = 'orange'
    } else{
        msg.innerHTML += `-  Boa Noite!`
        img.src = 'imgs/noite.png'
        document.body.style.background = 'rgb(69, 178, 241)'
    }
}