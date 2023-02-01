const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'genérica' //adicionando dinamicamente produtos de chave/valor
produto.preco = 299

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Lucas',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 12
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 49,
    }, {
        nome: 'Marta',
        idade: 51
    }],
    calculaValorSeguro: function() {
        //código
    }

}
console.log(carro)
carro.proprietario.endereco.numero = 1000
console.log(carro)
carro['proprietario']['endereco']['logradouro'] = 'Av. Paralela'
console.log(carro)

delete carro.proprietario.nome
console.log(carro)