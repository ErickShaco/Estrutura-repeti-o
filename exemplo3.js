const prompt = require(`prompt-sync`)()
var n = 1
var n2 = 0

while(n <= 100){
        n2 += n
        n++
    }
console.log(`${n2}`)