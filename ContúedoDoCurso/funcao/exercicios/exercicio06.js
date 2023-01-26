/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

// function jurosSimples(capitalInicial, tx, tempo) {
//     return capitalInicial + (capitalInicial * tx * tempo)
// }

const jurosSimples = (capitalInicial, tx, tempo) => { return capitalInicial + (capitalInicial * tx * tempo) }

console.log(jurosSimples(1000, 0.10, 3))


function jurosCompostos(capitalInicial, tx, tempo) {
    return (capitalInicial * ((1 + tx) ** tempo)).toFixed(2)
}

console.log(jurosCompostos(1000, 0.10, 3))