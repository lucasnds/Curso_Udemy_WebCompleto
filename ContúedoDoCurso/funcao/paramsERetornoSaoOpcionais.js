function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //4
console.log(area(2)) //Operação com undefined = NaN
console.log(area()) //NaN
console.log(area(2, 3, 22, 34, 36, 13)) // Ignora os outros parametros
console.log(area(5, 5))