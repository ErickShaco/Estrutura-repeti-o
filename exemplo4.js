const prompt = require(`prompt-sync`)()

const numero = parseInt(prompt(`Digite um numero: `))

let i = 0
let divisores = 0
while(i <= numero && divisores <= 3){
    let ehdiv = numero % i ===0
    if (ehdiv) divisores++
    i++
}

let primo = divisores ===2
if(primo){
    console.log(`Primo`)

}else{
    console.log(`Não é Primo`)
}
