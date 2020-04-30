async function getAbilityInfo(abilityUrl) {
    let response = await fetch(abilityUrl);
    if (!response.ok) {
        console.log('ERROR: Request returned error');
        return null;
    }
    const EFFECT_DATA = await response.json();
    return EFFECT_DATA.effect_entries[0].effect;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default async function getPokemon(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        return `<div class="pokemon_page"><div class="polaroid"><img class="sad_pokemon" alt="" src="https://i.pinimg.com/originals/dc/28/f7/dc28f762c803b7aef0d64875712acca9.png">
                    <p>Sad Pikachu</p></div>
                    <p>404: Not found.<br>
                    There's no such pokémon(</p></div>`;
    }

    const POKEMON_DATA = await response.json();
    let pokeInfo = `<div class="pokemon_page"><div class="polaroid"><img class="pokemon_image" alt="" src="${POKEMON_DATA.sprites.front_default}">
                    <p>${capitalize(pokemonName)}</p></div><p>`;

    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {
        let ability = POKEMON_DATA.abilities[i].ability;
        let abilityUrl = ability.url;
        let abilityPromise = getAbilityInfo(abilityUrl);
        let abilityName = capitalize(ability.name);
        pokeInfo += `<ins>${abilityName}</ins>: ${await abilityPromise}<br><br>`;
    }

    return `</p>` + pokeInfo + `</div>`;
}