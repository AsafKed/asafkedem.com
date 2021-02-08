import React from 'react';
import styled from 'styled-components';
import { theme, Clickable, Container, H1, MainSubtitle } from '../theme';

class HomeName extends React.Component {
    render() {
        return (
            // TODO link to about me
            <Clickable href="/about">
                <Container>
                    <Name>Asaf Kedem</Name>
                    <Subtitle>This is my website!</Subtitle>
                </Container>
            </Clickable>
        );
    };
}
export default HomeName;

const Name = styled(H1)`
    transition: font-size 0.5s;
    :hover {
        font-size: 15em;
    };
    margin: 0px;
    color: ${theme.primary};
`;

const Subtitle = styled(MainSubtitle)`
    margin: 0px;
`;