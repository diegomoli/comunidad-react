export const PersonajesService= async () => {
    

    const URL=`https://rickandmortyapi.com/api/character`;
    const resp= await fetch(URL);
    const {results}= await resp.json();

    return results;
}