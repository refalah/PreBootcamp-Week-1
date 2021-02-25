numbers = [80, 16, 18, 20, 23, 69, 2, 420]

function minNumber(x){
    const test = x.sort((a,b) => a - b)
    const final = test[0]
    console.log(final)
}

function maxNumber(x){
    const test = x.sort((a,b) => b - a)
    const final = test[0]
    console.log(final)
}

function average(x){
    const sum = x.reduce((total, num) => total + num)
    const divide = x.length
    const result = sum/divide
    console.log(result)
}

minNumber(numbers)
maxNumber(numbers)
average(numbers)
