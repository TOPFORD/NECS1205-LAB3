function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log("รวมตัวเลขในอาร์เรย์ :", sumArray([1, 2, 3, 4, 5]));


// const products = [  { name: 'Apple iPhone', price: 30000 },  { name: 'Samsung Galaxy', price: 25000 },  { name: 'Xiaomi Redmi', price: 10000 }];
// const searchTerm = 'Galaxy';
//
// function searchProductByName(products, searchTerm) {
//     return products.find(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }
// console.log(searchProductByName(products, searchTerm));