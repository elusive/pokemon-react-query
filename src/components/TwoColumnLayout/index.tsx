import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const TwoColumnGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
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