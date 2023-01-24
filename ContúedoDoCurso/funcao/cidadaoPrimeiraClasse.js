//criar uma funcao de forma literal
function fun1() {}

//criando uma funcao armazenando dentro de uma variavel
const fun2 = function() {}

//armazenando dentro de um array
const arrayFunction = [function(a, b) { return a + b }, fun2, fun1]
console.log(arrayFunction[0](2, 3))

//Armazenando dentro de um atributo deum objeto
const obj = {}
obj.falar = function() { return "Opa" }
console.log(obj.falar())

//Criando uma funcao que passa uma funcao como parametro
function run(fun) {
    fun()
}
run(function() {
    console.log('Executando...')
})

//Uma funcao pode retornar/conter uma funcao

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
    //Ou armazenar o resultado da 1ª funcao e depois passar como paramatro na variavel armazenada
const funcao = soma(2, 3)
funcao(5)