function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log("นับตัวอักษร (a ใน javascript):", countCharacter("javascript", "a")); // ผลลัพธ์: 2

// const users = [
//     { name: 'Alice', isLoggedIn: true },
//     { name: 'Bob', isLoggedIn: false },
//     { name: 'Charlie', isLoggedIn: true }];
// function filterLoggedInUsers(users) {
//     return users.filter(user => user.isLoggedIn);
// }
//
// console.log(filterLoggedInUsers(users));