import axios from 'axios'
import './App.css'
import  {Pokemon} from './models/pokemon';

export function App()  {
  let pokemon: Array<Pokemon>;
  axios.get('api/pokemon')
    .then(resp => {
      pokemon = resp.data;
      console.log(resp);
    });

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
            <tr></tr>
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
