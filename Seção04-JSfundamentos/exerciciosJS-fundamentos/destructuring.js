//ES6
const cliente = {
    nome: 'Lucas',
    idade: 19,
    endereco: {
        logradouro: 'Rua b',
        numero: '10'
    }
}

const { nome, idade } = cliente // acessando elementos do abjeto através do seu próprio identificador
console.log(nome, idade)

const { nome: n, idade: i } = cliente // acessando elementos de um objeto através de destructuring e dando nomes a eles 'n,i'
console.log(n, i)

const { sobrenome } = cliente
console.log(sobrenome) //undefined pq acessei a um elemento do objeto que nn foi definido

const { nome: nom, cep = true } = cliente // = true, significa que caso cep nao tenha valor definido ele vai atrubuir a true
console.log(nom, cep)