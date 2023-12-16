const pokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon ()
    pokemon.Pnumber = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types =  pokeDetail.types.map((typeslot) => typeslot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type 
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
    

}
pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}
    pokeAPI.getPokemons =  (offset = 0, limit = 5) => {
       
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        return fetch(url)
              .then((response) => response.json())
              .then((jsonBody) => jsonBody.results)
              .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
              .then((detailRequests)  => Promise.all(detailRequests))
              .then((pokemonsDetails) => (pokemonsDetails))
              
    }
    /*for(i =0; i< 10; i++) {
        fetch(`https://pokeapi.com//api/v2/pokemons${i}`)

    }*/

   
