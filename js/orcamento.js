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
var demao = document.querySelector('#demaos').value
var resultado = document.querySelector('#resultado')

var corTh = document.querySelector('th')
var corTinta = document.querySelector('#corTinta').value

function areaLateral() {
    larguraLateral = document.querySelector('#larguraLateral').value
    alturaLateral = document.querySelector('#alturaLateral').value

    var areaLateral = (larguraLateral * alturaLateral) * 2
    return areaLateral
}

function areaFrontal() {
    larguraFrontal = document.querySelector('#larguraFrontal').value
    alturaFrontal = document.querySelector('#alturaFrontal').value

    var areaFrontal = (larguraFrontal * alturaFrontal) * 2
    return areaFrontal
}

function areaPortas() {
    alturaPortas = document.querySelector('#alturaPortas').value
    larguraPortas = document.querySelector('#larguraPortas').value
    quantidadePortas = document.querySelector('#quantidadePortas').value

    var areaPortas = (larguraPortas * alturaPortas) * quantidadePortas
    return areaPortas
}

function areaJanelas() {
    alturaJanelas = document.querySelector('#alturaJanelas').value
    larguraJanelas = document.querySelector('#larguraJanelas').value
    quantidadeJanelas = document.querySelector('#quantidadeJanelas').value

    var areaJanelas = (larguraJanelas * alturaJanelas) * quantidadeJanelas
    return areaJanelas
}

function areaOutros() {
    alturaOutros = document.querySelector('#alturaOutros').value
    larguraOutros = document.querySelector('#larguraOutros').value
    quantidadeOutros = document.querySelector('#quantidadeOutros').value

    var areaOutros = (larguraOutros * alturaOutros) * quantidadeOutros
    return areaOutros
}

function calcularArea() {
    var areaTotal = (areaLateral() + areaFrontal()) - (areaPortas() + areaJanelas() + areaOutros())
    return areaTotal
}
function trocarTinta(){
    corTh = document.querySelector('th')
    corTinta = document.querySelector('#corTinta').value

    corTh.style.backgroundColor = corTinta
}
function calcularLitros() {
    rendimento = document.querySelector('#rendimento').value
    demao = document.querySelector('#demaos').value

    var litros = (calcularArea() / rendimento) * demao
    resultado.innerHTML = "Você vai precisar de " + litros + " litros"
}




