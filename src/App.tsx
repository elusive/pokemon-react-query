import "./App.css";

import TwoColumnLayout from "./components/TwoColumnLayout";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import PokemonRow from "./components/PokemonRow";
import usePokemonList from "./hooks/usePokemonList";
import usePokemonStore from "./hooks/usePokemonStore";

/**
 * The main application component.
 */
export function App() {
  const { data, isSuccess, isError, isFetching } = usePokemonList();
  const { selectedPokemon, setSelectedPokemon, filters } = usePokemonStore();
  if (isFetching) return <h4>Loading articles...</h4>;
  if (isError) return <h4 className="error">Loading articles failed :(</h4>;
  if (isSuccess && data.length === 0) return <p>No Pokemon are here... yet.</p>;

  if (!data) {
    return <div>Loading data</div>;
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "80vh",
          paddingTop: "1em",
        }}
      >
        <h1>Pokemon Search</h1>
        <p className="read-the-docs">
          This page is for searching for Pokemon records using React and React
          Query.
        </p>
       
            <TwoColumnLayout>
            <div>
            <PokemonFilter filters={filters} />
          
              <table width="100%">
                <tbody>
                  {data
                    ?.filter(({ name: { english } }) =>
                      english
                        .toLocaleLowerCase()
                        .includes(filters[filters.length - 1]?.toLocaleLowerCase())
                    )
                    .slice(0, 20)
                    .map((pokemon) => (
                      <PokemonRow
                        key={pokemon.id}
                        pokemon={pokemon}
                        click={setSelectedPokemon}
                      />
                    ))}
                </tbody>
              </table>
          </div>
          {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
          </TwoColumnLayout> 
      </div>
    </>
  );
}

export default App;
