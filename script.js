// Selectăm elementele din DOM
const button = document.getElementById("getCharacterBtn");
const characterImg = document.getElementById("characterImg");
const statusCell = document.getElementById("status");
const speciesCell = document.getElementById("species");
const genderCell = document.getElementById("gender");

// Atașăm event listener pe buton
button.addEventListener("click", getCharacter);

// Funcția principală
async function getCharacter() {
    console.log("Click pe buton: Get Character");

    // Generăm ID random între 1 și 826
    const randomId = Math.floor(Math.random() * 826) + 1;
    console.log("ID generat:", randomId);

    const url = `https://rickandmortyapi.com/api/character/${randomId}`;
    console.log("URL apelat:", url);

    try {
        console.log("Pornim fetch-ul către API...");
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Eroare HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Date primite de la API:", data);

        // Actualizăm imaginea
        characterImg.src = data.image;
        characterImg.alt = data.name;
        console.log("Imagine actualizată");

        // Actualizăm tabelul
        statusCell.textContent = data.status;
        speciesCell.textContent = data.species;
        genderCell.textContent = data.gender;
        console.log("Detalii actualizate în tabel");

    } catch (error) {
        console.error("A apărut o eroare:", error);
        alert("Nu am putut încărca personajul. Încearcă din nou.");
    }
}
