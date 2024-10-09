const prompt = require(`prompt-sync`)()

var i = 0
var soma = 0
for( i = 1; i <= 4; i++){
   let numero = parseInt(prompt(`Digite o numero ${i}:`))
   soma += numero
}
var media = soma / 4
console.log(`${media}`)