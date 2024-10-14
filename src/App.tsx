import axios from 'axios'
import './App.css'
import {PokemonRow} from './components/PokemonRow/pokemon-row';
import  {PokemonModel} from './models/pokemon.model';
import { useEffect, useState } from 'react';

export function App()  {
  const [data, setData] = useState([]);
  let pokemon: Array<PokemonModel>;
   
  useEffect(() => {
    axios.get('api/pokemon')
      .then(resp => setData(resp.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div style={{
          margin: "auto",
          width: "80vh",
          paddingTop: "1em"
      }}>
      <h1>Pokemon Search</h1>
      <table width="100%">
          <tbody>
            {
              data.slice(0,20).map(x => (<PokemonRow pokemon={x}/>)) 
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
