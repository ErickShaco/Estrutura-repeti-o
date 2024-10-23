const prompt = require(`prompt-sync`)()

const numero = parseInt(prompt(`Digite um Numero: `))

let iterator = numero

let fatorial = 1

while(iterator >= 1){
   fatorial *= iterator
   iterator--
}