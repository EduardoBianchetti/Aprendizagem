let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

//Expoentes eram assim, com a versão 2015 temos operador unário para expoente
//const exp = Math.pow(2, 3) // Primeiro parâmetro é a base e o segundo o expoente
//console.log(exp) // 2 elevado a 3 igual a 8.

const exp = 2 ** 3 // Primeiro parâmetro é a base e o segundo o expoente
console.log(exp) // 2 elevado a 3 igual a 8.

//Possibilita utilizar operadores unitário dessa forma
let base = 2
base **= 3 // Eleva o valor armazenado na base à terceira potencia
console.log(base)