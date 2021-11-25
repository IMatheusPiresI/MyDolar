
function calcularDolar(){
    var real = document.getElementById('input_reais').value
    var dolar = document.getElementById('input_dolar').value
    var res = document.getElementById('res')
    var resultado = real / dolar
    var resultado = resultado.toFixed(2)
    res.innerHTML = (`$ ${resultado}`)
}




