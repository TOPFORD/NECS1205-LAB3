function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("ตัวเลขคู่หรือคี่ (7):", isEvenOrOdd(7));
console.log("ตัวเลขคู่หรือคี่ (4):", isEvenOrOdd(4));


// const posts = [  { title: 'Post A', likes: 120 },  { title: 'Post B', likes: 300 },  { title: 'Post C', likes: 150 }];
//
// function sortPostsByLikes(posts) {
//     return posts.slice().sort((a, b) => b.likes - a.likes);
// }
//
// console.log(sortPostsByLikes(posts));
