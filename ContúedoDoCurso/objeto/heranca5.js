//tudo é function
//criando uma funcao dentro de um prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Lucas Nascimento'.reverse())

//podemos tambem modificar comportamentos já existentem porem isso é uma pessima ideia.