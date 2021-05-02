function calcular(){
    var nome = document.getElementById('nome')
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var res = document.getElementById('resposta')

    if(nome.value == "" || altura.value == "" || peso.value == ""){
        window.alert("[ERRO] - Preencha os campos para calcular o IMC!")
    }else{
        res = peso.value/(altura.value*altura.value)
        resposta.style.textAlign = 'center'
        resposta.style.font = 'normal 15pt Arial'
        resposta.innerHTML = `${nome.value} seu IMC é ${res}`
    }
}