import { PokemonModel } from "../../models/pokemon.model";
import styled from '@emotion/styled';

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const LeftAlignCell = styled.td`
  text-align: left;
`;

const RightAlignCell = styled.td`
  text-align: right;
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const PokemonInfo = (pokemon: PokemonModel) => (
    <InfoContainer>
      <InfoTitle>{pokemon.name.english}</InfoTitle>
      <table>
        <tbody>
          {Object.keys(pokemon.base).map((key: string) => (
            <tr key={key}>
              <LeftAlignCell><BoldText>{key}</BoldText></LeftAlignCell>
              <RightAlignCell>{pokemon.base[key]}</RightAlignCell>
            </tr>
          ))}
        </tbody>
      </table>
    </InfoContainer>
  );



export default PokemonInfo;