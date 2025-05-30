
let words : string [] = [
    "ESCALERA",
    "MONTAÑA",
    "VENTANA",
    "SOMBRERO",
    "COCODRILO",
    "CAMUFLAJE",
    "ESPEJISMO",
    "DESAYUNO",
    "ELECTRICIDAD",
    "INVIERNO",
    "RELAMPAGO",
    "MURCIÉLAGO",
    "BIBLIOTECA",
    "ROMPECABEZAS",
    "SEMAFORO"
];


export function randomWord () {

    const randomIndex = Math.floor (Math.random() * words.length);
    return words[randomIndex];
}