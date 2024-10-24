export type PokemonModel = {
    id: number,
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string
    },
    type: string[]
}
