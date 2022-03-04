import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const FontedIcon = styled(Icon)`
    font-family: FreeSans;
    font-size: 16px;
    line-height: 27px;
`;

export const TabIconHome = ({color}: {color: string}) => (
    <FontedIcon name="home" color={color} size={16} />
);

export const TabIcon5Q = ({color}: {color: string}) => (
    <FontedIcon name="people-circle-outline" color={color} size={16} />
);

export const TabIconKTS = ({color}: {color: string}) => (
    <FontedIcon name="warning-outline" color={color} size={16} />
);

export const TabIconTKC = ({color}: {color: string}) => (
    <FontedIcon name="book-outline" color={color} size={16} />
);

export const TabIconAbout = ({color}: {color: string}) => (
    <FontedIcon
        name="information-circle-outline"
        color={color}
        size={16}
    />
);
