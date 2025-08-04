// Given 2 arrays of characters, print out any character that appears in both
var mychar = (function() {
    const array1 = ['c', 'a', 'b', 'c'];
    const array2 = ['b', 'c', 'd'];
    const set2 = new Set(array2);
    const result = [];

    for (const char of array1) {
        if (set2.has(char)) {
            result.push(char);
            set2.delete(char); // still O(1)
        }
    }

    return result;
} ());

function updateChars() {
    document.getElementById('find_char_set').textContent = mychar;
}
updateChars();