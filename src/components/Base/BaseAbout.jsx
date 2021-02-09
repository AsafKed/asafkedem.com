import React from 'react';
import {
    Wrapper, LongText
} from '../../theme';
import myText from '../../texts/about';

class BaseAbout extends React.Component {
    render() {
        return (
            <Wrapper>
                <LongText> {myText} </LongText>
            </Wrapper>
        )
    }
}

export default BaseAbout;
