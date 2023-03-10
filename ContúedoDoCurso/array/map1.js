const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultados = nums.map(function(e) {
    return e * 2
})

console.log(resultados)

const soma10 = e => e + 10
const triplo = e => e * 3
const reais = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

//de forma separada
console.log(nums.map(soma10))
console.log(nums.map(triplo))
console.log(nums.map(reais))

//de forma aninhada
resultados = nums.map(soma10).map(triplo).map(reais) //podendo mudar a ordem
console.log(resultados)