import {GetPokemonCharacter} from "@/services/PokemonCharacter/GetPokemonCharacter.tsx"

export const Pokemon = () => 
{
    const {PokemonProfile, isLoading} = GetPokemonCharacter();
    const {name, image} = PokemonProfile;
            
    return (
        isLoading ? 
        <>
            <h1 className="loader-title">Obteniendo datos de tú pokemon</h1>
            <span className="loader"></span>
        </> :
        <main className="pokemon-card">
            <h1 className="pokemon-name">{name}</h1>
            <img src={image} className="pokemon-img" />
        </main>
    )
}