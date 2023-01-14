const nome = 'Luqueta da Bahia' // Contexto léxico 01

function setNome() {
    const nome = 'Luqueta de Salvador' // Contexto léxico 02
    return nome
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucas',
    idade: 19,
    endereco: {
        Logradouro: 'Rua Leblon',
        numero: 20
    }
}

console.log(nome)
console.log(setNome())
console.log(cliente)