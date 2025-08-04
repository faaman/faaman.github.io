// Given a list of strings and a specific string, find out how many times the string appears in the list
var mycount = (function() {
    const string_list = ['abc', 'def', 'abc', 'ghi'];    //can also test this for []
    const string_val = 'abc';    //can also test this for null
    let result = 0;

    for (const char of string_list) {
        if (char === string_val) {
            result++;
        }
    }

    return result;
} ());

function updateCount() {
    document.getElementById('find_string_count').textContent = mycount;
}
updateCount();