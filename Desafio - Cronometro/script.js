var centesimos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

    function inicio(){
        control = setInterval(cronometro);
        document.getElementById("inicio").disabled = true;
        document.getElementById("parar").disabled = false;
        document.getElementById("continuar").disabled = true;
        document.getElementById("reinicio").disabled = false;
    }
    
    function parar(){
        clearInterval(control);
        document.getElementById("parar").disabled = true;
        document.getElementById("continuar").disabled = false;
    }


    function reinicio(){
        clearInterval(control);
        centesimos = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        Centesimos.innerHTML = ":00";
        Segundos.innerHTML = ":00";
        Minutos.innerHTML = ":00";
        Horas.innerHTML = "00";
        document.getElementById("inicio").disabled = false;
        document.getElementById("parar").disabled = true;
        document.getElementById("continuar").disabled = true;
        document.getElementById("reinicio").disabled = true;
    }

function cronometro() {
    if (centesimos < 99) {
        centesimos++;
        if (centesimos < 10) { centesimos = "0"+centesimos } // adicionando zero ao centesimo < 10
        Centesimos.innerHTML = ":"+centesimos; // exibindo centesimos no cronometro
    }
    if (centesimos == 99) { // zerando a contagem dos centesimos
        centesimos = 0;
    }
    if (centesimos == 0) {
        segundos ++; // subindo 1 segundo ao cronometro
        if (segundos < 10) { segundos = "0"+segundos } // adicionando zero ao segundo < 10
        Segundos.innerHTML = ":"+segundos; // exibindo centesimos no cronometro
    }
    if (segundos == 59) { //zerando os segundos
        segundos = 0;
    }
    if ( (centesimos == 0)&&(segundos == 0) ) {
        minutos++; // subindo 1 minuto ao cronometro
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 59) { // zerando os minutos
        minutos = 0;
    }
    if ( (centesimos == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++; // subindo 1 hora ao cronometro
        if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML += horas;
    }
}

