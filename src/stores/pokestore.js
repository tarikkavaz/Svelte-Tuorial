import {writable} from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
    
    pokemon.set(loadedPokemon);
};
fetchPokemon();