const palindromes = function (str) {
    let cleanStr = str.replace(/[^\p{L}\p{N}\s]/gu, '').replace(/ /g, '').toLowerCase();
    let reverseStr = '';
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reverseStr += cleanStr.charAt(i);
    }
    if (cleanStr === reverseStr) {
        return true;
    } else {
        return false;
    }
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
