console.log(Math.ceil(6.1))

const obj1 = {} // Object
obj1.nome = 'Bola'
    //obj1['nome'] ='Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const Obj2 = new Obj('Cadeira') // Estou instanciando um objeto
const Obj3 = new Obj('Mesa') // Estou instaciando um objeto
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()