function printStars(rows) {
    console.log(`รูปแบบดาว (${rows} แถว):`);
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printStars(35);