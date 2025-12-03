function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp * 9/5) + 32;
    }
    else if (scale === "F") {
            return (temp - 32) * 5/9;
    } else {
        return "Invalid scale";
        }
}
console.log("แปลงอุณหภูมิ (0C):", convertTemperature(100, "C")); // ผลลัพธ์: 32
console.log("แปลงอุณหภูมิ (32F):", convertTemperature(100, "F")); // ผลลัพธ์: 0




// const cart = [
//     { name: 'Notebook', price: 250 },
//     { name: 'Pen', price: 20 },
//     { name: 'Eraser', price: 10 }];
// function calculateCartSummary(cart) {
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const itemNames = cart.map(item => item.name).join(', ');
//     return { total, itemNames };
// }
// const summary = calculateCartSummary(cart);
// console.log(`รายการสินค้า: ${summary.itemNames}`);
// console.log(`ราคารวม: ${summary.total} บาท`);