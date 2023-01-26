//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

//método antigo
function potencia(x, y) {
    return Math.pow(x, y)
}

//ou
//método novo
function potencia2(x, y) {
    return x ** y
}

//ou com arrow function e método novo

const potencia3 = (x, y) => { return x ** y }

console.log(potencia(2, 3))
console.log(potencia2(2, 3))
console.log(potencia3(2, 3))