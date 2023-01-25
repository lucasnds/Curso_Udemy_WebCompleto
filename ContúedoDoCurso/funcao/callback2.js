// neste exemplo vou criar um exemplo com callback e outro exemplo sem callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//SEM CALLBACK
const notasBaixas1 = []
for (i in notas) {
    if (notas[i] < 7)
        notasBaixas1.push(notas[i])
}

console.log(notasBaixas1)

//COM CALLBACK
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

//COM CALLBACK e ARROW FUNCTION
const notasBaixas3 = notas.filter(nota => nota < 7) // Se é arrow nao precisa de return

console.log(notasBaixas3)