

const elMayor = (a,b) =>  (a > b ) ? a : b ;

const esMiembro = (miembro) => (miembro) ? '2 dolares' : ' 10 dolares'

console.log(elMayor(33,454));
console.log(esMiembro(true));

const amigo = true
const amigosArr = [
    'Peter',
    'Tony',
    'Doctor Strange',
    amigo ? 'Thor': 'Loki'
]

console.log(amigosArr);


const nota = 2; 
const grado = nota >= 9 ? 'sobresaliente' : 
              nota >= 7 ? 'Notable' :
              nota >= 6 ? 'Bien' :
              nota >= 5 ? 'Suficiente' : 'Suspenso';
              console.log({nota, grado});
              