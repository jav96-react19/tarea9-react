import {useState} from "react";
import { PokemonType } from "@/types/PokemonType";

export const usePokemonProfile = () => 
{
    const [PokemonProfile, setPokemonProfile] = useState<PokemonType>({
        name: "",
        image: "",
        loader: true
    })

    return {PokemonProfile, setPokemonProfile}
}