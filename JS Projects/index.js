let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("happy.mp3");
let turn = "X";
let isgameover = false;

const changeturn = () => {
    return turn === "X" ? "O" : "X";
}

const wincheck = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -140, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 140, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            isgameover = true;
            if (isgameover) {
                document.getElementById("turnfor").innerHTML = boxtexts[e[0]].innerText + " won";
                gameover.currentTime = 0;
                gameover.play();
            }
            document.getElementById("img1").style.width = "200px";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}


// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", (e) => {
        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            wincheck();
            if (!isgameover) {
                document.getElementById("turnfor").innerHTML = "Turn for " + turn;
            }

        }
    })
})

let btn = document.getElementById("reset");
btn.addEventListener("click", (e) => {
    let boxtexts = document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(e => {
        e.innerText = "";
    })
    document.getElementById("img1").style.width = "0px";
    turn = "X";
    isgameover = true;
    document.getElementById("turnfor").innerHTML = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw";
    gameover.pause();
})