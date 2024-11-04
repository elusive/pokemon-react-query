import { PokemonModel } from "../../models/pokemon.model";

interface PokemonRowProps {
    pokemon: PokemonModel,
    click: (pokemon: PokemonModel) => void
}

export const PokemonRow = ({pokemon, click}: PokemonRowProps) => (
    <>
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.name.chinese}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td>
                <button onClick={() => click(pokemon)}>More Info</button>
            </td>
        </tr>
    </>
);

export default PokemonRow;