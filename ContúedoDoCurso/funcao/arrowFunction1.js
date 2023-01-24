let dobro = function(a) {
    return 2 * a
}

//arrow functions são anonimais a não ser que seja armazenada em uma variável
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
    //tirando os () ela torna o return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //funcao sem parametros
ola = _ => 'Olá' //tem parametro só nn ta sendo usado eo js nn reclama
console.log(ola())