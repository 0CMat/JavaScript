var imgLampada = document.getElementById('lampada')

function quebrada(){
    imgLampada.src = 'img/quebrada.jpg'
    document.getElementById("ligar").disabled = true; 
    document.getElementById("desligar").disabled = true; 
}

function ligar(){
        imgLampada.src = 'img/ligada.jpg'
}

function desligar(){
        imgLampada.src = 'img/desligada.jpg'
}

