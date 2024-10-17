import {useState} from "react";

export const usePokemonLoader = () => 
{
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    return {isLoading, setIsLoading}
}