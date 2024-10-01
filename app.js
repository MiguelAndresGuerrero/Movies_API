function search_Id() {
    let search = document.getElementById("btn-primary").value.trim();
    if (search === "") {
        return;
    }
    let URL;
    if (!isNaN(search)) {
        URL = `hhttps://imdb.iamidiotareyoutoo.com/justwatch?q=/${search}`;
    } else {
        URL = `https://imdb.iamidiotareyoutoo.com/justwatch?q=${search}`;
    }

    fetch(URL)
        .then(Response => Response.json())
        .then(data => {

            if (Array.isArray(data)) {
                if (data.length === 0) {
                    document.getElementById("view").innerHTML = `<p>No se encontraron peliculas</p>`;
                    return;
                }

                data.forEach(data => {
                    UsersHTML += `
                    <div class="blue">    
                        <h2>${data.description.title}</h2>
                        <img id="characterImage" src="${data.description.photo_url[0]}" class="img-thumbnail mb-3" alt="${data.description.photo_url[0]}">
                    <table class="table table-striped">
                        <p>Nombre: ${data.description.title}</p>
                        <p>ID: ${data.description.id}</p>
                        <p>Year: ${data.description.year}</p>
                    </table>
                </div>
                `;
                });

                UsersHTML += '</ul>';
                document.getElementById("view").innerHTML = UsersHTML;

            } else {

                if (!data.name_full) {
                    document.getElementById("view").innerHTML = `<p>Usuario no encontrado</p>`;
                    return;
                }
                let UsersHTML = `
                <div class="blue">    
                        <h2>${data.description.title}</h2>
                        <img id="characterImage" src="${data.description.photo_url[0]}" class="img-thumbnail mb-3" alt="${data.description.photo_url[0]}">
                    <table class="table table-striped">
                        <p>Nombre:${data.description.title}</p>
                        <p>ID:${data.description.id}</p>
                        <p>Year:${data.description.year}</p>
                    </table>
                </div>
                `;
                document.getElementById("view").innerHTML = UsersHTML;
            }
        })
        .catch(error => {
            document.getElementById("view").innerHTML = `<p>Error al buscar la pelicula </p>`;
            console.error('Error al buscar la pelicula: ', error);
        });
}
//URL ID or Name: https://imdb.iamidiotareyoutoo.com/justwatch?q=12