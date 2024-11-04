import { PokemonModel } from "../../models/pokemon.model";

const PokemonInfo = (pokemon: PokemonModel) => (
    <div>
      <h2>{pokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(pokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{pokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );



export default PokemonInfo;