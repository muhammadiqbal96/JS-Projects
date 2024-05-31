let url = "https://kontests.net/api/v1/all"
let P = fetch(url);
P.then((value1) => {
    return value1.json()
}).then((v) => {
    console.log(v)
    let ihtml = "";
    for (item of v) {
        console.log(item)
        ihtml += `  
          <div class="card" style="width: 22rem;">
         <img src="images.jpeg" class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${item.name}</h5>
             <p class="card-text">Start Time at : ${item.start_time}</p>
             <p class="card-text">End Time at : ${item.end_time}</p>
             <p class="card-text">Contest Site : ${item.site}</p>
             <a href="${item.url}" class="btn btn-primary">Visi Here</a>
             </div>
             </div>`

            }

    document.getElementById("cardc").innerHTML = ihtml

})