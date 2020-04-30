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
        console.log('ERROR: Request returned error');
        return null;
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