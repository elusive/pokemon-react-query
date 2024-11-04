import usePokemonStore from "../../hooks/usePokemonStore";
import styled from '@emotion/styled';

/*  Styled Components */
const Input = styled.input`
    width: 80%;
    padding: 0.2rem;
    font-size: large;
}`;

export interface PokemonFilterProps {
    filters: string[],
}

export const PokemonFilter = ({filters}: PokemonFilterProps) => {
    const { addFilter } = usePokemonStore();

    return (
     <div>
        <span className="filter-input-label">Filter:&nbsp;</span>
        <Input 
            type="text"
            value={filters[filters.length - 1]}
            onChange={(evt) => addFilter(evt.target.value)}
            />
    </div>);
}

export default PokemonFilter;