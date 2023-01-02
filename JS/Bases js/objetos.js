
const mascota = {
    nombre: 'Messi',
    edad: 35,
    vivo: false
}

mascota.balonesOro = 7

console.log(mascota.balonesOro);
mascota.hijos = ['Mateo', 'Thiago', 'CR7'];

console.log(mascota.hijos);


// trabajando con destructuring objects//

const web = {
    nombre: 'Marca',
    links: {
        enlace: 'www.Marca.com'
    },
    redesSociales: {
        twitter : { 
            usuario: '@marca',
            nombre: 'marca.com',
        },
    }
}
const nombreTwitter = web.redesSociales.twitter.nombre
console.log(nombreTwitter);


//