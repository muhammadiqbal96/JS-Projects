let input = document.getElementById("input");
let submit = document.getElementById("submit");
let morebtn = document.getElementById("more");
let container = document.getElementsByClassName("resultimg")[0];

let keyword = "";
let page = 1;

const search = async () => {
    if (page === 1) {
        container.innerHTML = "";
    }
    
    keyword = input.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=PyMkRDk7qzS4-6sRsgA2CfCRCo5Lf8Z95bH6g4m3TLQ&per_page=30`

    const f = await fetch(url);
    const data = await f.json();
    const results = data.results;


    results.map((e) => {
        let img = document.createElement("img");
        img.src = e.urls.small;
        let a = document.createElement("a");
        a.href = e.links.html;
        a.target = "_blank";
        a.append(img);

        container.append(a);
    })
    morebtn.style.display = "block";
}

submit.addEventListener("click", (e) => {
    if (input.value === "") {
        alert("Nothing to search.")
    } else {
        e.preventDefault();
        alert("Searching...");
        search();
        page = 1;
    }
    input.value = "";
})

morebtn.addEventListener("click", () => {
    page++;
    search();
    alert("Searching...");
})