function convertCelcius(input1, num, input2){
    if(input1 === "celsius" && input2 === "fahrenheit"){
        return (num * 9/5) + 32;
    } else if(input1 === "celsius" && input2 === "kelvin"){
        return num + 273.15
    } else if (input1 === "celsius" && input2 === "reaumur") {
        return num * 4/5
    } else if(input1 === "reaumur" && input2 === "celsius"){
        return num * 5/4
    } else if (input1 === "reaumur" && input2 === "kelvin") {
        return num * 5/4 + 273.15
    } else if (input1 === "reaumur" && input2 === "fahrenheit") {
        return num * 9/4 + 32
    } else if (input1 === "fahrenheit" && input2 === "reaumur") {
        return (num -32) * 4/9
    } else if (input1 === "fahrenheit" && input2 === "kelvin") {
        return (num - 32) * 5/9 + 273.15
    } else if (input1 === "fahrenheit" && input2 === "celsius") {
        return (num - 32) * 5/9
    } else {
        console.log("Invalid input")
    }
}


console.log(convertCelcius("fahrenheit", 3, "celsius"))