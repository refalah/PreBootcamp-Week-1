function convert(age) {
    let umur;
    if (age >= 20 && age <= 60) {
        umur = "Dewasa";
    } else if (age >= 11 && age <= 19) {
        umur = "Remaja";
    } else if (age >= 2 && age <= 10) {
        umur = "Anak-anak";
    } else if (age >= 0 && age <= 1) {
        umur = "Bayi";
    } else {
        console.log("Invalid input");
    }

    //return `Umur ${age} tahun adalah ${umur}`
    x = `Umur ${age} tahun adalah ${umur}`
    console.log(x);

}

convert(20)