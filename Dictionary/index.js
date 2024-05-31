let input = document.getElementById("input");
let info = document.getElementById("details");
let infobox = document.getElementById("infobox");
let audio = document.getElementsByTagName("audio")[0];

const fetchword = async (word) => {

    infobox.style.display = "none";
    info.style.display = "block";
    info.innerHTML = `Searching the meaning of "${word}"`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let result = await fetch(url).then((value) => {
        return value.json();
    }).then((value) => {
        console.log(value);
        info.style.display = "none";
        infobox.style.display = "block";
        title.innerHTML = `"${word}"`;
        synonyms.innerHTML = `"${value[0].meanings[0].synonyms[0]}" ,"${value[0].meanings[0].synonyms[1]}" "${value[0].meanings[0].synonyms[2]}" ,"${value[0].meanings[0].synonyms[3]}" `;
        definitions.innerHTML = `"${value[0].meanings[0].definitions[0].definition}" ,"${value[0].meanings[0].definitions[1].definition}"`;
        audio.src = value[0].phonetics[0].audio;
    })

}

input.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchword(input.value);
        input.value = "";
    }
})