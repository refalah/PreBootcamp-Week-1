
const person1 = {
    name: "Budi",
    type: "C",
    wh: 9
}

function gaji(data) {

    function typeF() {
        if (data.type == "A") {
            return 1000;
        } else if (data.type == "B") {
            return 2000;
        } else if (data.type == "C") {
            return 3000;
        } else if (data.type == "D") {
            return 4000;
        }
    }


    function overtimeF() {
        if (data.wh * 30 >= 200) {
            return 200
        } else {
            return 0
        }
    }
    let sum1 = typeF() * data.wh
    let sum2 = typeF() * data.wh * 30
    let x = data.wh * 30
    let overtime = overtimeF() * x
    let sum3 = sum2 + overtime

    return `Nama : ${data.name}, Golongan : ${data.type}, Gaji Perhari : ${sum1}, Gaji Sebulan : ${sum2}, Lembur: ${overtime}, Total : ${sum3}`


}

console.log(gaji(person1));
