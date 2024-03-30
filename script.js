
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// ---------------- Write and delet value in text box----------
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear input box after adding task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()// save data calling
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()//save data calling
    } else if (e.target.tagName === "SPAN") {
        e.target.closest("li").remove();
        saveData()// save data calling
    }
}, false);

function updateCheckedImage(item) {
    const checkImage = item.querySelector("::before");
    if (item.classList.contains("checked")) {
        checkImage.style.backgroundImage = "url(checked.png)";
    } else {
        checkImage.style.backgroundImage = "url(unchecked.png)";
    }
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()