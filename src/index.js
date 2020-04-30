import getCV from "./cv";
import getPokemon from "./pokemon";

let sect = document.querySelector('section');
let pokemon = 'pikachu';

function fillWithUserData() {
    sect.innerHTML = getCV();
}

function fillWithPokemon() {
    getPokemon(pokemon).then(info => sect.innerHTML = info);
}

document.getElementById('home').onclick = fillWithUserData;
document.getElementById('pokemon').onclick = fillWithPokemon;
fillWithPokemon();