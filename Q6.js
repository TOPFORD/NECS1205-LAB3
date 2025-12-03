function findMAx(arr) {
    let max = 0
    for (const i of arr) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log("ค่ามากที่สุด:", findMAx([1, 2, 3, 10, 4, 5]));