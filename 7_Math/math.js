

function gaji(name, type, wh){
    
    function typeF(){
        if (type == "A") {
            return 1000;
        } else if (type == "B"){
            return 2000;
        } else if (type == "C") {
            return 3000;
        } else if (type == "D") {
            return 4000;
        }
    }

    function overtimeF(){
        if (wh * 30 >= 200) {
            return 200
        } else {
            return 0
        }
    }
        var sum1 =  typeF() * wh
        var sum2 =  typeF() * wh * 30
        var x = wh * 30
        var overtime = overtimeF() * x
        var sum3 = sum2 + overtime
        
        return `Nama : ${name}, Golongan : ${type}, Gaji Perhari : ${sum1}, Gaji Sebulan : ${sum2}, Lembur: ${overtime}, Total : ${sum3}`
    
}

console.log(gaji("Joko", "A", 8));

