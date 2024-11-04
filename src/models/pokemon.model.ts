export type PokemonModel = {
    id: number,
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string
    },
    type: string[],
    base: {
        HP: number,
        Attack: number,
        Defense: number,
        "Sp. Attack": number,
        "Sp. Defense": number,
        Speed: number
    }
}


/*
base: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      "Sp. Attack": PropTypes.number.isRequired,
      "Sp. Defense": PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired,
    }),

*/