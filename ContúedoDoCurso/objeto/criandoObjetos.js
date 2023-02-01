//usando a notação literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

f1 = criarFuncionario('Lucas', 6000, 0)
f2 = criarFuncionario('Lúcio', 10000, 5)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//Uma funcção famosa que retorna Objecto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)