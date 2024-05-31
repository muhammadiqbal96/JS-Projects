let showinput = document.getElementById("btn");
let input = document.getElementById("inputtext");

const show = () => {
    showinput.setAttribute("hidden", "true")
    input.removeAttribute("hidden")
}

let inputvalue = document.getElementById("taskinput");
let list = document.getElementById("listul");

const addtask = () => {
    if (inputvalue.value === "") {
        alert("You should write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputvalue.value +  `<button class="btn1">Pending...</button>
        <span class="material-symbols-outlined">delete</span>`;
        list.appendChild(li);
    }
    inputvalue.value = "";
    save();
}

list.addEventListener("click", (e)=>{
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.style.textDecoration = "line-through black 3px";
        e.target.innerHTML = "Finished";
        e.target.setAttribute("disabled","ture");
        e.target.classList.remove("btn1");
        save();
        
    } 
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false)

const save = () =>{
    localStorage.setItem("data", list.innerHTML)
}
const showTask = () =>{
   list.innerHTML = localStorage.getItem("data")
}
showTask();