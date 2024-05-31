let btn = document.getElementsByTagName("button")[0];
let container = document.getElementsByClassName("boxcontainer")[0];
let del = Array.from(document.getElementsByClassName("del"));

const save = () =>{
    localStorage.setItem("Data", container.innerHTML);
}

container.addEventListener("click",(e)=>{
    if (e.target.tagName === "P") {
      save();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})

document.body.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON") {
        let a = document.createElement("div");
        a.className = "textarea";
        a.innerHTML = `<p contenteditable="true" class="note"></p><img src="download.jpeg" alt="Del" class="del">`;
        container.append(a);
    }
})

const showtask = () =>{
   container.innerHTML = localStorage.getItem("Data");
}
showtask();