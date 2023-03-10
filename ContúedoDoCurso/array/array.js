alunos = []
alunos.push('Lucas') // adicionar no último elemento do array
console.log(alunos)

alunos.push('Maria', 'Jorge')
console.log(alunos)

//alunos.splice(qual a posição index, quantas vezes, substituir pelo oq)
alunos.splice(0, 1, ['Laís', 'Lucas'])
console.log(alunos)

alunos.splice(0, 1) //removendo um elemento através do splice
console.log(alunos)