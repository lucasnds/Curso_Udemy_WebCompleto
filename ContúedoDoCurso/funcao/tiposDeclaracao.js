console.log(soma(3, 5))

//function declaration
function soma(x, y) { //antes mesmo da declaração da função nós conseguimos chama-la antes, pois o JavaScript carrega todas as functions antes de executar o código
    return x + y
}

//function expression
const subtracao = function(x, y) { // o mesmo não ocorre em function expression
    return x - y
}
console.log(subtracao(3, 4))

//named function expression
const mult = function mult(x, y) { //nem com function expression nomeada
    return x * y
}
console.log(mult(3, 4))