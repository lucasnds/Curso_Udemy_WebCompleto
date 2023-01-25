class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//-----------

function PessoaConstrutor(name) {
    this.name = name
    this.falar = function() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const Marta = new PessoaConstrutor('Marta')
Marta.falar()