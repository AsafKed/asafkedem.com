import React from 'react';
import BaseCentre from '../components/Base/BaseCentre.jsx';
import myText from '../texts/about';

class About extends React.Component {
    render() {
        return (
            <BaseCentre page="about" text={myText}/>
        );
    }
}

export default About;