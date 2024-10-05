
document.getElementById("MovieID").addEventListener("input", (e) => {
    let url = `https://imdb.iamidiotareyoutoo.com//justwatch?q=${e.target.value}`;
    view(url)
})

function view(URL) {
    fetch(URL)
        .then(Response => Response.json())
        .then(Data => {
            if (Data.Response === "error") {
                document.getElementById("view").innerHTML = `<p>Movie not found :(</p>`;
            } else {
                document.getElementById("view").innerHTML = ``
                Data.description.forEach(element => {
                    document.getElementById("view").innerHTML += `
                <div class="container">
                    <h3>${element["title"]}</h3>
                    <img src="${element["photo_url"]}">
                    <p>Year: ${element["year"]}</p>
                    <p>ID: ${element["id"]}</p>
                    <p>Type: ${element["type"]}</p>
                    <a href="${element["url"]}">${element["title"]}</a>
                </div>
                `;
                });
            }
        })
        .catch(error => {
            console.error('Error, request API not found: ', error);
            document.getElementById("view").innerHTML = `<p>Error, loading movie</p>`;
        })
};