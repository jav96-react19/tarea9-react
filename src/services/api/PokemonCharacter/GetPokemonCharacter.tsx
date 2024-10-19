import {useEffect} from "react";
import {usePokemonProfile} from '@/hooks/PokemonDetails/usePokemonProfile.tsx';
import {endpoint} from "@/services/api/instance/axios" 

export const GetPokemonCharacter = () => 
{
    const {PokemonProfile, setPokemonProfile} = usePokemonProfile();

    useEffect(() => 
    {
        const fetchData = async() => 
        {
            try
            {
                const request = await endpoint.get("/pikachu");

                if(request.status === 200)
                {
                    const {name, sprites} = request.data;
                    const { front_shiny } = sprites;

                    setPokemonProfile(initialData => ({
                        ...initialData,
                        name: name,
                        image: front_shiny
                    }))
                }
            }
            catch(error) {
                console.log(error);
            }
        }
        
        const timeoutId = setTimeout(() => 
        {
            setPokemonProfile(initialData => ({...initialData, loader: !initialData.loader}))
        }, 1100)

        fetchData();

        return () => clearTimeout(timeoutId);

    }, [])

    return {PokemonProfile};
}