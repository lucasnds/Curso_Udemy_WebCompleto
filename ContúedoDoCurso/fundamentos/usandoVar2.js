var numero = 1;


{
    var numero = 2
    console.log(`Dentro = ${numero}`)
}
console.log(`Fora = ${numero}`) // muda pois apenas blocos de códigos diferencia

function funcaoNumero() {
    var numero = 3
    console.log(numero) // Dentro de um bloco de funcão a variavel var muda
}
funcaoNumero()