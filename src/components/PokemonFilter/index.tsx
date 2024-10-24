import { PokemonModel } from "../../models/pokemon.model";
import { usePokemonStore } from "../../hooks/usePokemonStore";

export interface PokemonFilterProps {
    filters: string[],

}
/*
export default const PokemonFilter = ({filters}: PokemonFilterProps) => {
     <div>
        <input 
            type="text"
            value={filters.last()}
            onChange={(evt) => setFilter(evt.target.value)}
            />
}*/
