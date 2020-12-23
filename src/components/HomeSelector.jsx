import React from 'react';
import { Container, H3, Wrapper } from '../theme';
import man from '../media/man.png'

class HomeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    render() {
        var element = UnOpened;
        if (this.state.opened) element = Opened;
        else element=UnOpened;

        return (
            <div onMouseDown={() => this.setState({opened: true})}>
                { element }
            </div>
        );
    };
}
export default HomeSelector;

// Keep to reuse later
// Use the Container's style, but add the opened option
// const Hoverable = styled(Container)`
//     background-color: red;
// `;

const Opened = 
    <Container align="right" justify="top">
        <H3 href="projects">Projects</H3>
        <H3 href="skills">Skills</H3>
        <H3 href="blog">Entrepreneurial Blog</H3>
    </Container>

const UnOpened = 
    <Container>
        <img src={man} alt="businessman"/>
    </Container>
