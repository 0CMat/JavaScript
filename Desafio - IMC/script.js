function calcular(){
    var nome = document.getElementById('nome')
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var res = document.getElementById('resposta')

    if(nome.value == "" || altura.value == "" || peso.value == ""){
        window.alert("[ERRO] - Preencha os campos para calcular o IMC!")
    }else{
        res = peso.value/(altura.value*altura.value)
        var IMCTotal = res.toFixed(1)
        resposta.style.textAlign = 'center'
        resposta.style.font = 'normal 15pt Arial'

        var ClasIMC = `Não definido`
            if(IMCTotal < 18.5){
                ClasIMC = `Abaixo do Peso`
                console.log(IMCTotal)
            }
            else if(IMCTotal > 18.6 && IMCTotal <= 24.9){
                ClasIMC = `Peso Normal`
            }
            else if(IMCTotal > 25 && IMCTotal <=  29.9){
                ClasIMC = `Sobrepeso`
            }
            else if(IMCTotal > 30 && IMCTotal <= 34.9){
                ClasIMC = `Obesidade Grau 1`
            }
            else if(IMCTotal > 35 && IMCTotal <= 39.9){
                ClasIMC = `Obesidade Grau 2`
            }
            else{
                ClasIMC = `Obesidade Grau 3 ou Mórbida`
            }
        resposta.innerHTML = `<strong>${nome.value}</strong> seu IMC é <strong>${IMCTotal}</strong>`
        resposta.innerHTML += `<p><strong>Classificação de IMC:</strong> ${ClasIMC} </p>`
    }


}