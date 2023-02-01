/*  Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
 */

function Bhaskara(a = 3, b = 5, c = 12) {
    let resultados = []
    const delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        const formulaPositiva = (-(b) + Math.sqrt(delta)) / (2 * a)
        const formulaNegativa = (-(b) - Math.sqrt(delta)) / (2 * a)
        if (formulaNegativa === formulaPositiva) {
            resultados.push(formulaPositiva)
            console.log(resultados)
        } else {
            resultados.push(formulaNegativa)
            resultados.push(formulaPositiva)
            console.log(resultados)
        }
    }
}

Bhaskara(3, 5, 12) // delta negativo
Bhaskara(1, -3, -54) // resultados positivos
Bhaskara(1, 6, 9) //Delta = 0