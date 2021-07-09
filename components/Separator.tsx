import {Text, View} from 'react-native';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled(View)`
        flex-direction: row;
`;

const Line = styled(View)`
        background-color: black;
        height: 1px;
        flex: 1;
        align-self: center;
`;

const Content = styled(Text)`
        align-self: center;
        padding-left: 5px;
        padding-right: 5px;
`;

export const Separator: React.FC = ({children}) => (
        <Container>
                <Line />
                <Content>{children}</Content>
                <Line />
        </Container>
);
