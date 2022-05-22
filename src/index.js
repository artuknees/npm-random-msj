const messages = [
    "Arturo",
    "Ana",
    "Jorge",
    "Carolina",
    "Paulina",
    "Silvina",
    "Gustavo",
    "Pampa",
    "Vilma",
    "Katia",
    "Jose",
    "Diego",
    "Pedro",
    "Laura"
];

// Funcion para hacer el random
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};
// Math.random da un random del 0 al 1
// Multiplicado por el largo del vector lo escalo a ese espacio.
// Pasado por floor, lo redondeo a entero inferior
// Luego muestro el resultado

module.exports = { randomMsg };
// Lo pongo exportable