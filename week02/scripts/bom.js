const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector(".list");

button.addEventListener('click', function() { 
    const favChap = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const delBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = favChap;
    listItem.appendChild(delBtn);
    delBtn.textContent = "X";
    list.appendChild(listItem);

    delBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    input.focus();
});