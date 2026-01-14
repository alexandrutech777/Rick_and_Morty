/* RESET DE BAZĂ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* FUNDAL PAGINĂ */
body {
    min-height: 100vh;
    background-color: #0b0f14; /* dark space */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    color: #e6e6e6;
}

/* CONTAINER PRINCIPAL */
#app {
    background-color: #111827; /* dark card */
    border: 2px solid #39ff14; /* green neon */
    border-radius: 12px;
    padding: 24px;
    width: 360px;
    text-align: center;
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
}

/* TITLU */
#app h1 {
    margin-bottom: 20px;
    color: #39ff14;
    letter-spacing: 1px;
}

/* IMAGINE PERSONAJ */
#character-image img {
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 2px solid #1f2937;
    background-color: #000;
}

/* TABEL */
#character-details {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

#character-details th,
#character-details td {
    padding: 10px;
    border-bottom: 1px solid #1f2937;
}

#character-details th {
    text-align: left;
    color: #9ca3af;
    font-weight: normal;
}

#character-details td {
    text-align: right;
    color: #e6e6e6;
}

/* BUTON */
#getCharacterBtn {
    width: 100%;
    padding: 12px;
    background-color: transparent;
    border: 2px solid #39ff14;
    color: #39ff14;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

#getCharacterBtn:hover {
    background-color: #39ff14;
    color: #0b0f14;
    box-shadow: 0 0 12px rgba(57, 255, 20, 0.6);
}

#getCharacterBtn:active {
    transform: scale(0.97);
}
