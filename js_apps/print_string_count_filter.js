// Given a list of strings and a specific string, find out how many times the string appears in the list
var mycount_filter = (function() {
    const string_list = ['abc', 'def', 'abc', 'ghi'];    //can also test this for []
    const string_val = 'abc';    //can also test this for null

    return string_list.filter(str => str === string_val).length;

} ());

function updateCountFilter() {
    document.getElementById('find_string_count_filter').textContent = mycount_filter;
}
updateCountFilter();