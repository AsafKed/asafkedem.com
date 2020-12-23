import React from 'react';
import { Container, H3 } from '../Style';

class HomeSelector extends React.Component {
    render() {
        return (
            <Container align="right" justify="top">
                <H3 href="projects">Projects</H3>
                <H3 href="skills">Skills</H3>
                <H3 href="blog">Entrepreneurial Blog</H3>
            </Container>
        );
    };
}
export default HomeSelector;