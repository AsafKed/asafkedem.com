import React from 'react';
import styled from 'styled-components';
import { Container, VSelector, IMG } from '../theme';
import man from '../media/man.png';

class HomeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            keepOpen: true
        };
        this.toggleOpened=this.toggleOpened.bind(this);
    }

    toggleOpened() {
        if (this.keepOpen)
        this.setState({opened: !this.state.opened});
    }

    render() {
        var element = UnOpened;
        if (this.state.opened) element = Opened;
        else element = UnOpened;

        return (
            <div onMouseDown={() => this.setState({opened: true, keepOpen: false})}>
                { element}
            </div>
        );
    };
}
export default HomeSelector;

const Opened =
    <Container align="right">
        <VSelector href="projects">Projects</VSelector>
        <VSelector href="skills">Skills</VSelector>
        {/* TODO fix this later, it's very hacky */}
        <VSelector href="">Bring back the man!</VSelector>
        <VSelector href="blog">Entrepreneurial Blog</VSelector>
    </Container>

        
const Man = styled(IMG)`
    scale: 0.4;
    transition: scale 0.5s;
    :hover {
        scale: 0.6;
    }
`;

const UnOpened =
    <Container>
        <Man src={man} alt="businessman" />
    </Container>