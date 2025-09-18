
function calculateArea() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('area').innerText = `The area of the rectangle is: ${area}`;
}


function groceryTracker() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value);
    let grocery2 = parseFloat(document.getElementById('grocery2').value);
    let grocery3 = parseFloat(document.getElementById('grocery3').value);

    let grocery_total = grocery1 + grocery2 + grocery3;

    document.getElementById('grocery_total').innerText = `The total amount is: ${grocery_total} $`;
}


