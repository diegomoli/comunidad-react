export const GetPersonaje= async () => {
    // try{
        
    //     return await fetch(`https://rickandmortyapi.com/api/character`).then(res => res.json().then(data=>data))
        
    // }catch(err){
    //     console.log(err);
    // }

    const URL=`https://rickandmortyapi.com/api/character`;
    const resp= await fetch(URL);
    const {results}= await resp.json();

    return results;
}