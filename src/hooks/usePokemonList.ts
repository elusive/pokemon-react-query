import { useQuery } from "@tanstack/react-query"
import { PokemonModel } from "../models/pokemon.model";
import axios from "axios";

function usePokemonList() {
    return useQuery({
      queryKey: ['pokemons'],
      queryFn: async (): Promise<Array<PokemonModel>> => {
        const response = await axios.get('api/pokemon');
        return await response.data;
      },
    })
}

export default usePokemonList;