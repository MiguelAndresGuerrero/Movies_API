function search_ID() {
    let search = document.getElementById("Search").value.trim();
    if (search === "") {
        console.log(search);
        return;
    }

    let URL;

    if (!isNaN(search)) {
        URL = `https://imdb.iamidiotareyoutoo.com/justwatch?q=${search}`;
    } else {
        URL = `https://imdb.iamidiotareyoutoo.com/justwatch?q=${search}`;
    }

    fetch(URL)
        .then(res => res.json())
        .then(data => {

            if (Array.isArray(data)) {
                if (data.length === 0) {
                    document.getElementById("view").innerHTML = `<p>No se encontraron usuarios</p>`;
                    return;
                }

                let UsersHTML = '<ul class="list-group">';

                data.forEach(user => {
                    UsersHTML += `
                    <div class="blue2">
                        <img id="characterImage" src="${user.avatar}" class="img-thumbnail mb-3" alt="${user.name_full}">
                        <table class="table table-striped">
                            <tr class="Name"><th scope="col">Nombre: </th><td>${user.name_full}</td></tr>
                            <tr class="Descripcion"><th scope="col">Descripción: </th><td>${user.description}</td></tr>
                            <tr class="ID"><th scope="col">ID: </th><td>${user.id}</td></tr>
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
                        <h2>${data.name_full}</h2>
                        <img id="characterImage" src="${data.avatar}" class="img-thumbnail mb-3" alt="${data.name_full}">
                    <table class="table table-striped">
                        <tr><th scope="col">Nombre: </th><td>${data.name_full}</td></tr>
                        <tr><th scope="col">Descripción: </th><td>${data.description}</td></tr>
                        <tr><th scope="col">ID: </th><td>${data.id}</td></tr>
                    </table>
                </div>
                `;
                document.getElementById("view").innerHTML = UsersHTML;
            }
        })
        .catch(error => {
            document.getElementById("view").innerHTML = `<p>Error al buscar usuario</p>`;
            console.error('Error al buscar usuario:', error);
        });
}

document.getElementById("Search").addEventListener("input", function () {
    search_ID();
});