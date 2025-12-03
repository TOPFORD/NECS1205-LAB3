function isPalindromeSimple(word) {
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log("Palindrome (madam):", isPalindromeSimple("madam"));
console.log("Palindrome (hello):", isPalindromeSimple("hello"));