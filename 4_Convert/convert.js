

function convert(num) {
    if (num >= 86 && num <= 100) {
        console.log("A");
    } else if (num >= 70 && num <= 85) {
        console.log("B");
    } else if (num >= 50 && num <= 69) {
        console.log("C");
    } else if (num >= 30 && num <= 49) {
        console.log("D");
    } else if (num >= 0 && num <= 29) {
        console.log("E");
    } else {
        console.log("Invalid input");
    }

}

convert(75);