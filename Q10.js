function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}
console.log("นับคำในประโยค (JavaScript is fun):", countWords("JavaScript is fun"));