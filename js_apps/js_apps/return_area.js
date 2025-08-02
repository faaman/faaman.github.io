var area = (function() {
    var width = 3;
    var height = 2;
    return width * height;
} ());
function updateArea() {
    document.getElementById('find_area').textContent = area;
}
updateArea();
