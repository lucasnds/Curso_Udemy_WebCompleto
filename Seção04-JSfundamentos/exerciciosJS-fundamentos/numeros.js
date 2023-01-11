const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(peso1 + peso2)

const av1 = 9.867
const av2 = 8.343
const total = (av1 * peso1) + (av2 * peso2)
console.log(total)
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // FIXAR AS CASAS DECIMAIS
console.log(Math.floor(media)) // APROXIMA PRA BAIXO
console.log(Math.round(media)) // APROXIMA PRA CIMA