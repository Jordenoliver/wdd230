const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector(".list");

let chaptersArray = getChapterList () || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() { 
    if (input.value !='') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
    input.value = '';
    input.focus();
    }
});

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

    function displayList(listItem) {
        let li = document.createElement('li');
        let delBtn = document.createElement('button');
        li.textContent = item;
        delBtn.textContent = 'X';
        delBtn.classList.add('delete');
        li.append(delBtn);
        list.append(li);
        delBtn.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus ();
        });
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }