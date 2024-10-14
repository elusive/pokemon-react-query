import { PokemonModel } from "../../models/pokemon.model";

export interface PokemonRowProps {
    pokemon: PokemonModel
}
export const PokemonRow = ({pokemon}: PokemonRowProps) => (
    <>
        <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.name.chinese}</td>
            <td>{pokemon.type.join(', ')}</td>
        </tr>
    </>
);