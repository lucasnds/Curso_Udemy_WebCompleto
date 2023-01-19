const escola = "Cod3r"

for (let i = 0; i < 5; i++) {
    console.log(escola.charAt(i)) // exibe o caracter daquele índice
}

console.log(escola.charCodeAt(3)) // tabela unicode

console.log(escola.indexOf('4')) //retorna o índice que contem oq tem dentro dos () se nn tiver retorna -1

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // vai deíndice 0 até o 3, sem contar o 3

console.log('Escola '.concat(escola).concat("!")) // concatena

console.log(escola.replace(3, 'e')) // substitui isso por aquilo