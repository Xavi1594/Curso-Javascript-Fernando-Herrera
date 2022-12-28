

const coches = [ 'Ford', 'Mazda' , 'Honda', 'toyota']

let i = 0
while( i < coches.length ) {
    if ( i === 1 ) { 
    }
    console.log(coches[i]);
    i++
}

console.warn(' do while');
let j = 0 
do {
console.log(coches[j]);
j++
} while( coches[j]);