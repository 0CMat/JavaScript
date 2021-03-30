function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] - Verifique os dados inseridos")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = window.document.getElementById('imagem')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 14){
                // criança
                img.src = 'imgs/homem-jovem.png'
            } else if(idade < 24){
                // Jovem 
                img.src = 'imgs/homem-jovem.png'
            } else if(idade < 65){
                // Adulto
                img.src = 'imgs/homem.png'
            }else{
                // idoso
                img.src = 'imgs/homem-idoso.png'
            }
        } 
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 14){
                // criança
                img.src = 'imgs/crianca-menina.png'
            } else if(idade < 24){
                // Jovem 
                img.src = 'imgs/mulher-jovem.png'
            } else if(idade < 65){
                // Adulto
                img.src = 'imgs/mulher.png'
            }else{
                // idoso
                img.src = 'imgs/mulher-idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }    
}