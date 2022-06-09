function toggleSwitch() {
    const checkbox = document.getElementById('myCheckbox')
    var pricing1 = document.getElementById("pricing1");
    var pricing2 = document.getElementById("pricing2");
    var pricing3 = document.getElementById("pricing3");
    var isChecked;

    checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        console.log('checked');
        isChecked = true;
        pricing1.innerHTML = "<div class='dollar'>&dollar;</div>19.99";
        pricing2.innerHTML = "<div class='dollar'>&dollar;</div>24.99";
        pricing3.innerHTML = "<div class='dollar'>&dollar;</div>39.99";
    } else {
        console.log('not checked');
        isChecked = false;
        pricing1.innerHTML = "<div class='dollar'>&dollar;</div>199.99";
        pricing2.innerHTML = "<div class='dollar'>&dollar;</div>249.99";
        pricing3.innerHTML = "<div class='dollar'>&dollar;</div>399.99";
    }
    });
}