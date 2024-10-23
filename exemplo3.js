const prompt = require(`prompt-sync`)()

const numero = parseInt(prompt(`Digite um numero: `))

let fatorial = 1

for (let iterator = numero; iterator >= 1; iterator--){
    fatorial *= iterator
}
console.log(`${numero}! é ${fatorial}`)