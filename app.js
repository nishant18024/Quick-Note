let inputText = document.querySelector('#inputText');
let addButton = document.querySelector('#addButton');
let listItem = document.querySelector('#listItem');

addButton.addEventListener('click', function (event) {
    let noteText = inputText.value;
    let li = document.createElement('li');
    li.innerText = noteText;
    listItem.appendChild(li);
    inputText.value = "";

    li.addEventListener('click', function () {
        li.remove();
    })
})