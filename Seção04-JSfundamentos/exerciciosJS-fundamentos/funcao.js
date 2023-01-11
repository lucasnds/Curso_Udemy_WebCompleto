//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 4) // soma normal
imprimirSoma(2) // Nan Not a Number
imprimirSoma(2, 3, 4, 5, 6) //soma normal
imprimirSoma() //Nan


//funcao com retorno
function Soma(a, b = 0) {
    return a + b
}

console.log(Soma(2))
console.log(typeof Soma().a)