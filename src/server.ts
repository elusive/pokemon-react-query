import { createServer } from "miragejs";
import pokemon from '../src/assets/pokemon.json'; 
 
createServer({
    routes() {
        this.get("/api/pokemon", () => pokemon)
    },
 });

 console.log('Mock API Server created.');
