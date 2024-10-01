
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
                    <p>TITLE:${element["title"]}</p>
                    <img src="${element["photo_url"]}">
                    <p>YEAR:${element["year"]}</p>
                    <p>TYPE:${element["type"]}</p>
                    <p>URL:${element["url"]}</p>
                    <p>ID:${element["id"]}</p>
                </div>
                `;
                });
            }
        })
        .catch(error => {
            console.error('Error, request API not found: ', error);
            document.getElementById("view").innerHTML = `<p>Error, loading movie</p>`;
        });
}