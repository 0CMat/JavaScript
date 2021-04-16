let num = document.querySelector('input#number')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado!`
        lista.appendChild(item)
    }else{
        window.alert("Valor Inválido!")
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] > menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p><strong>Ao todo temos ${total} números cadastrados</strong></p>`
        res.innerHTML += `<p><strong>O menor valor foi: ${menor}</strong></p>`
        res.innerHTML += `<p><strong>O maior valor foi: ${maior}</strong></p>`
        res.innerHTML += `<strong><p>A soma dos valores é: ${soma}</p></strong>`
        res.innerHTML+= `<strong><p>A média dos valores é: ${media}</p></strong>`
    }
}

function limpar(){
    valores = []
    flista.innerHTML = 'LIMPO!'
}

