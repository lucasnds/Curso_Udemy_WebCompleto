// estrategia 1 para gerar valor padrão
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(), soma(2, 2, 2), soma(1, 2, 3), soma(0, 0, 0))
    //soma(0, 0, 0) ai está o maior problema desse método pois 0 = false e vai para o lado do 1


//estrategia 2,3,4 para gerar um valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = b in arguments ? b : 1
    c = isNaN(c) ? 1 : c // melhor das três formas pois já verifica se é number
    return a + b + c
}
console.log(soma2(), soma2(2, 2, 2), soma2(1, 2, 3), soma2(0, 0, 0))

//Forma moderna de se atribuir um valor padrao EM6+
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(2, 2, 2), soma3(1, 2, 3), soma3(0, 0, 0))