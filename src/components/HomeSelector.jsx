import React from 'react';
import { Container, H3, IMG } from '../theme';
import man from '../media/man.png'

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
    <Container align="right" justify="top">
        <H3 href="projects">Projects</H3>
        <H3 href="skills">Skills</H3>
        {/* TODO fix this later, it's very hacky */}
        <H3 href="">Bring back the man!</H3>
        <H3 href="blog">Entrepreneurial Blog</H3>
    </Container>

const UnOpened =
    <Container>
        <IMG src={man} alt="businessman" />
    </Container>
