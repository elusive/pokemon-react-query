import PokemonType from "../../models/pokemon.type";

const PokemonInfo = ({ name: { english }, base }) => (
    <div>
      <h2>{english}</h2>
      <table>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;