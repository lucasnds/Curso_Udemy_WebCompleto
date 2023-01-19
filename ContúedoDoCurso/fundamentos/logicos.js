function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador Unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } //Objeto
}
console.log(compras(true, false))