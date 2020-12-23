import React from 'react';
import { Wrapper, Container, H1, H5} from '../theme';
import HomeName from '../components/HomeName.jsx';
import HomeSelector from '../components/HomeSelector.jsx';

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