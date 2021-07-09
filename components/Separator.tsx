import {Text, View} from 'react-native';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled(View)`
        flex-direction: row;
        margin: 10px 0;
`;

const Line = styled(View)`
        background-color: black;
        height: 1px;
        flex: 1;
        margin: 3px 0 0 0;
        align-self: center;
`;

const Content = styled(Text)`
        align-self: center;
        font-style: italic;
        padding-left: 5px;
        padding-right: 5px;
        color: #de602b;
`;

export const Separator: React.FC = ({children}) => (
        <Container>
                <Line />
                <Content>{children}</Content>
                <Line />
        </Container>
);
