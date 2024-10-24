import './App.css'
import {PokemonRow} from './components/PokemonRow/pokemon-row';
import usePokemonList from './hooks/usePokemonList';
import { usePokemonStore } from "./hooks/usePokemonStore";

export function App()  {
  const { data,isSuccess, isError, isFetching} = usePokemonList();
  const { selectedPokemon, filters, addFilter, removeFilter } = usePokemonStore();
  if (isFetching) return <h4>Loading articles...</h4>
  if (isError) return <h4 className='error'>Loading articles failed :(</h4>
  if (isSuccess && data.length === 0) return <p>No Pokemon are here... yet.</p>

  

  return (
    <>
      <div style={{
          margin: "auto",
          width: "80vh",
          paddingTop: "1em"
      }}>
      <h1>Pokemon Search</h1>
      <input 
          type="text"
          value={filters.last()}
          onChange={(evt) => addFilter(evt.target.value)} /> 
      <table width="100%">
          <tbody>
            {
              data?
                .filter(({name: { english } }) => 
                    english.toLocaleLowerCase()
                    .includes(filters.last())
                )
                .slice(0,20)
                .map(x => (
                    <PokemonRow 
                        pokemon={x}
                        onClick={(p) => }/>)) 

            }
          </tbody>
      </table>
      <p className="read-the-docs">
          This page is for searching for Pokemon 
          records using React and React Query. 
      </p>
      </div>
    </>
  )
}

export default App
