// POKéMON API
const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    cb(data);
  });
};

loadPokemon(4, (pokemon) => {
  console.log(pokemon);
});
