import React from 'react'
import { GetPokemon } from '../services/PokemonService'

const PokeApi = () => {

    const [pokeName, setPokeName] = React.useState('')
    const [pokemon, setPokemon] = React.useState({})
    const [pokemonElegido, setPokemonEligido] = React.useState({})

    // React.useEffect(()=>{
    //     if(pokeName !== ''){
    //         GetPokemon(pokeName).then(res => {
    //             console.log(res)
    //             const {name,sprites} = res
    //             setPokemon({
    //                 name,
    //                 sprites
    //             })
    //         }).catch(ex => {
    //             setPokemon({})
    //         })
    //     }   
    // },[pokeName])

    React.useEffect(()=>{
            GetPokemon().then(res => setPokemon(res.results)).catch(ex => setPokemon({}))
    },[])
    
    React.useEffect(()=>{
        if(pokeName !== ''){
            const resultado = pokemon.find(item => item.name === pokeName)
            if(resultado){
                fetch(resultado.url).then(res => res.json()).then(res => {
                    const { name, sprites} = res
                    setPokemonEligido({name,sprites})
                }).catch(ex => setPokemonEligido({}))
            }
        }else{
            setPokemonEligido({})
        }
    },[pokeName])

    const handleChange = ({target}) => setPokeName(target.value)

    return (
        <div>
            <h1>PokeApi</h1>
            <div>
                <h1>Creando la PokeApi</h1>
                <input type="text" name="pokeName" value={pokeName} onChange={handleChange}></input>    
                <div>
                    {/* {
                        pokemon !== {} && pokemon.sprites && pokemon.name &&
                        <>
                        <img src={pokemon.sprites.front_default} alt="pokemon"/>
                        <h1>{pokemon.name}</h1>
                        </>
                    } */}
                    {
                        pokemonElegido !== {} && pokemonElegido.sprites && pokemonElegido.name  &&
                        <>
                        <img src={pokemonElegido.sprites.front_default} alt="pokemon"/>
                        <h1>{pokemonElegido.name}</h1>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default PokeApi
