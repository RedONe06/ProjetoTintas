//Mostrar a quantidade de litros necessários para pintar uma "casa"

/* A casa:  ---------------
parede esquerda:
largura:
altura:

parede da frente:
altura:
largura:

Porta:
largura:
altura:
quantidade:

Janela:
largura:
altura:
quantidade:

Outro objeto consideravel:
largura:
altura:
quantidade:

Cálculo: -------------

litros = (areaTotal/rendimento)*quantidadeDemao
valorFinal = litros * valorDaMarca

Resposta: ---------------- 
Olá 'nomeUsuario'! Para pintar seus 'areaTotal' metros quadrados
você precisará de 'numeroDeLitros' dando um total de 'valorFinal'*/


var larguraLateral = document.querySelector('#larguraLateral').value
var larguraLateral = document.querySelector('#larguraLateral').value
var alturaLateral = document.querySelector('#alturaLateral').value

var larguraFrontal = document.querySelector('#larguraFrontal').value
var alturaFrontal = document.querySelector('#alturaFrontal').value

var alturaPortas = document.querySelector('#alturaPortas').value
var larguraPortas = document.querySelector('#larguraPortas').value
var quantidadePortas = document.querySelector('#quantidadePortas').value

var alturaJanelas = document.querySelector('#alturaJanelas').value
var larguraJanelas = document.querySelector('#larguraJanelas').value
var quantidadeJanelas = document.querySelector('#quantidadeJanelas').value

var alturaOutros = document.querySelector('#alturaOutros').value
var larguraOutros = document.querySelector('#larguraOutros').value
var quantidadeOutros = document.querySelector('#quantidadeOutros').value

var rendimento = document.querySelector('#rendimento').value
var demao = document.querySelector('#demao').value
var resultado = document.querySelector('#resultado')

var areaLateral = (larguraLateral*alturaLateral)*2
var areaFrontal = (larguraFrontal*alturaFrontal)*2
var areaPortas = (larguraPortas*alturaPortas)*quantidadePortas
var areaJanelas = (larguraJanelas*alturaJanelas)*quantidadeJanelas
var areaOutros = (larguraOutros*alturaOutros)*quantidadeOutros

function calcularArea(){
    var areaTotal = (areaLateral+areaFrontal)-(areaPortas+areaJanelas+areaOutros)
    return areaTotal

}

function calcularLitros(){
    var litros = (calcularArea()/rendimento)*demao
    alert(litros)
    //resultado.innerHTML = "Você vai precisar de " + litros + "litros"
}




