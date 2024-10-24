import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { PokemonModel } from '../models/pokemon.model';

type PokemonState = {
    selectedPokemon: PokemonModel | undefined,
    filters: string[],
    addFilter: (f: string) => void;
    removeFilter: (f: string) => void;
}

const usePokemonStore = create(
  persist<PokemonState>(
    (set) => ({ 
      selectedPokemon: undefined,
      setSelectedPokemon: (p: PokemonModel) => {
          set(() => ({
              selectedPokemon: p
          }));
      },
      filters: [],
      addFilter: (f: string) => { 
          set((state) => ({
              filters: [...state.filters, f]
          }));
      },
      removeFilter: (f: string) => {
          set((state) => ({
              filters: state.filters.filter(
                  (fltr) => fltr !== f
              ),
          }));
      }}),
      { name: "filter-storage" }
    )
  );

export default usePokemonStore;

