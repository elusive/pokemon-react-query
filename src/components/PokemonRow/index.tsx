import { PokemonModel } from "../../models/pokemon.model";

interface PokemonRowProps {
    pokemon: PokemonModel,
    onClick: (pokemon: PokemonModel) => void
}

export const PokemonRow = ({pokemon}: PokemonRowProps) => (
    <>
        <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.name.chinese}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td>
                <button onClick={() => onClick(pokemon)}>More Info</button>
            </td>
        </tr>
    </>
);

export default PokemonRow;