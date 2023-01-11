let valores = [7.7, 9, 8.9]
console.log(valores[0])

console.log(valores[4]) // vai retornar undefined pois ainda não existe a posição 4 no array

valores[3] = 10

console.log(valores)

valores.push('Lucas') // adiciona no fim do array
    //.pop retira o primeiro elemento do array e o deixa vazio

console.log(valores)