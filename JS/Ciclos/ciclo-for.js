

const heroes = ['Batman', 'Superman', 'Iron Man', 'Hulk']

console.warn('for');

for(let i = 0; i < heroes.length; i++) {  
    console.log(heroes[i]);
}

console.warn('for in');

for (const i in heroes) {
    console.log(heroes[i]);
}

console.warn('for of');

for (const heroe of heroes) {
    console.log(heroe);
}
