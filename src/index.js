import getCV from "./cv";
import getPokemon from "./pokemon";

let sect = document.querySelector('section');
let pokemon = 'pikachu';

function fillWithUserData() {
    sect.innerHTML = getCV();
}

function fillWithError() {
    sect.innerHTML = `<p>Please, enter pokemon name. </p>`;
}

function fillWithPokemon(name) {
    if (name == '') {
        fillWithError()
    }
    getPokemon(name).then(info => sect.innerHTML = info);
}

document.getElementById('home').onclick = fillWithUserData;
document.getElementById('pokemon').onclick = () => {
    fillWithPokemon(pokemon)
};
document.getElementById('button').onclick = () => {
    fillWithPokemon(document.getElementById('input').value)
};

fillWithUserData();