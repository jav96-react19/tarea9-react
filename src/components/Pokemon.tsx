import {GetPokemonCharacter} from "@/services/api/PokemonCharacter/GetPokemonCharacter"

export const Pokemon = () => 
{
    const {PokemonProfile} = GetPokemonCharacter();
    const {name, image} = PokemonProfile;
            
    return (
        PokemonProfile.loader ? 
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