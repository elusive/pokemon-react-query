import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const TwoColumnGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 80% 20%;  
    grid-column-gap: 1rem;
    margin: auto auto;
`;

interface LayoutProps {
    children: ReactNode;
}; 

const TwoColumnLayout: FC<LayoutProps> = ({children}) => (  
    <TwoColumnGrid>
        {children}
    </TwoColumnGrid>
);

export default TwoColumnLayout;