function criarProduto(name = 'Celular', price = '1500.00') {
    const desconto = price * 0.10
    return {
        name,
        price: price - desconto, //price with desconto
        desconto
    }
}

//Ou

function criarProduto2(name = 'Celular', price = '1500.00') {

    return {
        name,
        price: price, //price original
        desconto: price * 0.1 //desonto

    }
}

console.log(criarProduto())
console.log(criarProduto('Monitor', 1300))
console.log(criarProduto('Capa de moto', 500))
console.log(criarProduto2())
console.log(criarProduto2('Monitor', 1300))
console.log(criarProduto2('Capa de moto', 500))