import { useQuery } from "@tanstack/react-query"
import { PokemonType } from "../models/pokemon";
import axios from "axios";

function usePokemonList() {
    return useQuery({
      queryKey: ['pokemons'],
      queryFn: async (): Promise<Array<PokemonType>> => {
        const response = await axios.get('api/pokemon');
        return await response.data;
      },
    })
}

export default usePokemonList;
