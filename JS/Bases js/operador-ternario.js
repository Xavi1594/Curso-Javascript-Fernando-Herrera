

const dia = 0;
const horaActual = 9;

let horaApertura;
let mensaje;

// if ( [0,6].includes( dia )) {
//     console.log("Fin de semana");
//     horaApertura = 9
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes (dia)) ? 9 : 11 

// if (horaActual >= horaApertura) {
//     mensaje = "Esta abierto"
// } else {
//     mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`
// }

mensaje = ( horaActual >= horaApertura) ?  "Esta abierto" :  `Está cerrado hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});