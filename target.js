//resolução para o exercicio 2
const fibonacci = (fibNumber) => {
    let firstNumber = 0
    let secondNumber = 1
    let result = firstNumber + secondNumber
    if (fibNumber == result || fibNumber == firstNumber) return "Seu numero pertence a sequencia de fibonacci"
    while (true) {
        if (fibNumber == result) return "Seu numero pertence a sequencia de fibonacci"
        if (fibNumber < result) return "Seu numero não pertence a sequencia de fibonacci"

        firstNumber = secondNumber
        secondNumber = result
        result = firstNumber + secondNumber
    }
}

console.log(fibonacci(4))

//resolução para o exercicio 5
const reverse = (word) => {
    const finalArr = []
    let finalWord = ''
    for(let index = 0; index < word.length; index++){
        finalArr.push(word[index])
    }

    for(let i = finalArr.length - 1; i >= 0; i--){
        finalWord += finalArr[i]
    }
    return finalWord
}
console.log(reverse('socorram me subi no onibus em marrocos'))