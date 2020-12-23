import React from 'react';
import { Container, Flexbox, H1, H3, H5} from '../Style'

class Home extends React.Component {
    render() {
        return (
            <Flexbox>
                <Container border="true">
                    <H1>Asaf Kedem</H1>
                    <H5>This is my website!</H5>
                </Container>
                <Container>
                    <H3 href="projects">Projects</H3>
                    <H3 href="skills">Skills</H3>
                    <H3 href="blog">Entrepreneurial Blog</H3>
                </Container>
            </Flexbox>
        );
    }
}

export default Home;