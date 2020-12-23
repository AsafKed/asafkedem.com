import React from 'react';
import { Wrapper, Container, H1, H5} from '../Style';
import HomeName from '../components/HomeName';
import HomeSelector from '../components/HomeSelector';

class Home extends React.Component {
    render() {
        return (
            <Wrapper>
                <HomeName/>
                <HomeSelector/>
            </Wrapper>
        );
    }
}

export default Home;