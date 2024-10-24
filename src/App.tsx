import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonRow from "./components/PokemonRow";
import usePokemonList from "./hooks/usePokemonList";
import usePokemonStore from "./hooks/usePokemonStore";

/**
 * The main application component.
 */
export function App() {
  const { data, isSuccess, isError, isFetching } = usePokemonList();
  const { selectedPokemon, setSelectedPokemon, filters, addFilter } =
    usePokemonStore();
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
        
          <div>
            <span className="filter-input-label">Filter:&nbsp;</span>
            <input
              type="text"
              value={filters[filters.length - 1]}
              onChange={(evt) => addFilter(evt.target.value)}
            />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80% 20%",
              gridColumnGap: "1rem",
              margin: "auto auto",
            }}>
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
                      pokemon={pokemon}
                      onClick={(p) => setSelectedPokemon(p)}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
        </div>
        
      </div>
    </>
  );
}

export default App;
