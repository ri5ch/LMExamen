var listItem = null; 

function search() {
  const characterName = document.getElementById("character-name").value;
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const character = data.results[0];

      if (listItem == null) { // Si no hay listItem, crea uno nuevo
        listItem = document.createElement("div");
        listItem.id = "contenedor-personajes";
        results.appendChild(listItem); // Agrega el listItem a results
      }

      // Actualiza el contenido de listItem con el nuevo personaje
      listItem.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Especie: ${character.species}</p>
        <p>Género: ${character.gender}</p>
        <p>Origen: ${character.origin.name}</p>
      `;
    })
    .catch(error => console.log(error));
}

