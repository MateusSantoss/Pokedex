
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonList = document.getElementById('pokemonList')
const limit = 10;
let offset = 0;

const maxRecords = 151


 




function loadPokemonItens (offset, limit) {
        pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.Pnumber}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
        
                </div>
           </li>`).join('')

        
        pokemonList.innerHTML += newHtml
        
        
        
       })

}

loadPokemonItens(offset, limit)



loadMoreButton.addEventListener("click", () => {
    debugger

    offset += limit
    const qtdRecordNexPage = offset + limit
    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset 
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    } else {
        loadPokemonItens(offset, limit)

    }
    
    
})


    
    

       
