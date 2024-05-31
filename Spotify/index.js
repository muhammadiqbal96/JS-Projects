let masterSongName = document.getElementById("title");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let playbtn = document.getElementById("masterPlay");
let previousbtn = document.getElementById("previous");
let bar = document.getElementById("progessbar");
let gif = document.getElementById("gifi");
let nextbtn = document.getElementById("next");
let songindex = 1;

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

let audioitem = new Audio("songs/1.mp3");

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})

playbtn.addEventListener("click", ()=>{

    if (audioitem.paused || audioitem.currentTime==0){
        audioitem.play();
        gif.style.opacity = "1";
        masterSongName.innerText = songs[songindex].songName;
        playbtn.classList.remove("fa-play-circle");
        playbtn.classList.add("fa-pause-circle");

    }else if(audioitem.played || audioitem.currentTime!==0){
        audioitem.pause();
        gif.style.opacity = "0";
        masterSongName.innerText = songs[songindex].songName;
        playbtn.classList.add("fa-play-circle");
        playbtn.classList.remove("fa-pause-circle");
    }
   
})

audioitem.addEventListener("timeupdate", ()=>{
    let progress = parseInt((audioitem.currentTime/audioitem.duration)*100);
    bar.value = progress;
})

bar.addEventListener("change", ()=>{
    let timed = parseInt((bar.value*audioitem.duration)/100)
    audioitem.currentTime = timed;
})

let songplay = Array.from(document.getElementsByClassName("songplay"));

const makeallplay = () =>{
    songplay.forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}

songplay.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        songindex = parseInt(e.target.id);
        makeallplay();
        masterSongName.innerText = songs[songindex].songName;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        playbtn.classList.remove("fa-play-circle");
        playbtn.classList.add("fa-pause-circle");
        audioitem.src = `songs/${songindex}.mp3`;
        audioitem.currentTime = 0;
        audioitem.play();
        gif.style.opacity = "1";

    })
})


nextbtn.addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioitem.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioitem.currentTime = 0;
    audioitem.play();
    playbtn.classList.remove('fa-play-circle');
    playbtn.classList.add('fa-pause-circle');

})

previousbtn.addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioitem.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioitem.currentTime = 0;
    audioitem.play();
    playbtn.classList.remove('fa-play-circle');
    playbtn.classList.add('fa-pause-circle');
})