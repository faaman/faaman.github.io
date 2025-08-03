// Given 2 arrays of characters, print out any character that appears in both
var mychar = (function() {
    const array1 = ['c', 'a', 'b', 'c'];
    const array2 = ['b', 'c', 'd'];
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                //console.log(`Common character: ${array1[i]}`);
                result.push(array1[i]);  //function adds an element to end of an array
            }
        }
    }
    return result;
} ());

function updateChars() {
    document.getElementById('find_char').textContent = mychar;
}
updateChars();