let resposta = document.getElementById('resposta')
function calcular(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let soma = num1 + num2
    resposta.innerHTML = 'Resultado da Soma = ' + soma
}