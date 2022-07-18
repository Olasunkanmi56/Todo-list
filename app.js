const inputBox = document.querySelector(".input-field input"),
todolist = document.querySelector(".todolist"),
clearBtn = document.querySelector(".clearBtn"),
addBtn = document.querySelector(".input-field button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Tasks");
    if(getLocalStorage == null){
        letArr = [];
    }else{
        letArr = JSON.parse(getLocalStorage);
    }
    letArr.push(userData);
    localStorage.setItem("Tasks", JSON.stringify(letArr));
    showTask();
    inputBox.value = "";
}

showTask();

function showTask(){
    let getLocalStorage = localStorage.getItem("Tasks");
    if(getLocalStorage == null){
        letArr = [];
    }else{
        letArr = JSON.parse(getLocalStorage);
    }
    let pending = document.querySelector(".pending");
    pending.textContent = letArr.length;
    let newLiTag = '';
    letArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`; 
    });
    todolist.innerHTML = newLiTag;
    localStorage.setItem("Tasks", JSON.stringify(letArr));
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("Tasks");
    letArr = JSON.parse(getLocalStorage);
    letArr.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(letArr));
    showTask();
}


clearBtn.onclick = () => {
    letArr = [];
    localStorage.setItem("Tasks", JSON.stringify(letArr));
    showTask();
}
