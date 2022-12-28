

let a = 10;
let b = a
a = 30
console.log({ a, b});

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = { nombre: 'Peter'}
let tony = cambiaNombre(peter);

console.log(peter, tony);

const frutas = ['manzana', 'pera', 'piña']

console.time('slice')
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice')

console.time('spread')
const otrasFrutas = [...frutas];
console.timeEnd('spread')


otrasFrutas.push('mango')

console.table({frutas, otrasFrutas})