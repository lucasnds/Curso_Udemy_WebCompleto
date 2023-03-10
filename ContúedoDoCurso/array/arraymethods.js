const jogadores = ['Jacaré', 'Biel', 'Rezende', 'Daniel']
console.log(jogadores)

jogadores.pop() //remove o último elemento do array
console.log(jogadores)

jogadores.shift() //remove o primeiro elemento do array
console.log(jogadores)

jogadores.unshift('Everaldo') //adciona no primeiro elemento do array
console.log(jogadores)

jogadores.push('Kayky') //adiciona no último elemento do array
console.log(jogadores)

const jogadoresBons = jogadores.slice(2) //gera um novo array apartir da chamada de um outro e apartir do primeiro parametro chamado
console.log(jogadoresBons)

const jogadoresMedianos = jogadores.slice(0, 2) //gera um novo array apartir da chamada de um outro e apartir do primeiro parâmetro chamado até a posição passada no segundo parâmetro -1
console.log(jogadoresMedianos)