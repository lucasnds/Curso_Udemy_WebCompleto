/*1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoes(x, y) {
    const soma = x + y
    const sub = x - y //passível de if/else
    const div = x / y
    const mult = x * y
    console.log(`soma = ${soma}, subtração = ${sub}, divisão = ${div}, multiplicação = ${mult}`)
}

operacoes(5, 4)
operacoes(2, 3)
operacoes(9, 7)