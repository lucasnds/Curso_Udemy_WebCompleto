const { kStringMaxLength } = require("buffer");
const { Verify } = require("crypto");

function Veiculo(velocidadeMaxima = 200, delta = 5) {

    //Atributo privado da funcao Veiculo()
    let velocidadeAtual = 0

    //metodo público
    this.acelelar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo público
    this.frear = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual -= delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo público
    this.getVelocidadeAtual = () => velocidadeAtual
}


const ka = new Veiculo
ka.acelelar()
console.log(ka.getVelocidadeAtual())


const uno = new Veiculo(220) //instaciando um obj através de um function, em java eu estaria instanciando uma classe

uno.acelelar()

uno.frear() //-
console.log(uno.getVelocidadeAtual())

const dk150 = new Veiculo(110, 4)

dk150.acelelar()
dk150.acelelar()
dk150.acelelar()
dk150.acelelar()
console.log(dk150.getVelocidadeAtual())