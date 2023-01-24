const notas = [2.2, 3.3, 4.4, 5.5]
for (let i in notas) {
    console.log(`nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Nascimento',
    idade: '19',
    peso: '71.3'
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}