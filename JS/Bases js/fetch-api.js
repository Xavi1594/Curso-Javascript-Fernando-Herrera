// "pokemon":"https://pokeapi.co/api/v2/pokemon/",

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then( res =>  res.json() )
// .then(data => {
// // console.log(data.results);
// let arrayNombres = []
// data.results.forEach(element => {
//     // console.log(element);
//     arrayNombres.push(element.name)
// });
// console.log(arrayNombres);
// })
// .catch(error => console.log(error));

// async await//

const obtenerPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    const arrayNombres = data.results.filter(
      (poke) => poke.name != "bulbasaur"
    );
    console.log(arrayNombres);
  } catch (error) {}
};
obtenerPokemons();
