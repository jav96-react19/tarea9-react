import {useEffect} from "react";
import {usePokemonProfile} from '@/hooks/PokemonDetails/usePokemonProfile.tsx';
import { usePokemonLoader } from '@/hooks/PokemonDetails/usePokemonLoader.tsx';
import {endpoint} from "@/services/AxiosInstance/axiosInstance.tsx" 

export const GetPokemonCharacter = () => 
{
    const {PokemonProfile, setPokemonProfile} = usePokemonProfile();
    const {isLoading, setIsLoading} = usePokemonLoader();

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

                    setPokemonProfile({
                        name: name,
                        image: front_shiny
                    })
                }
            }
            catch(error) {
                console.log(error);
            }
        }
        
        const timeoutId = setTimeout(() => 
        {
            setIsLoading(false);
        }, 1500)

        fetchData();

        return () => clearTimeout(timeoutId);

    }, [])

    return {PokemonProfile, isLoading};
}