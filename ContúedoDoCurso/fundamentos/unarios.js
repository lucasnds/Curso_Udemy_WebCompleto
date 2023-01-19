let num1 = 1
let num2 = 2

console.log(--num2 === num1++) // true pois o -- pré-fixado é feito antes da igualdade
console.log(num2-- === num1++)
num1++
++num2