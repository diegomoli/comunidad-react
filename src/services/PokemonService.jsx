

export const GetPokemon = async (data) => {
    try{
        return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(res => res.json())
    }catch(err){
        console.log(err);
    }
}