import React from 'react';
import styled from 'styled-components';
import {
    Page, SubPage, Wrapper, SubPageContainer,
    Divider, Header, Subtitle, Text
} from '../../theme';
// import me from '../../media/me.jpg';

class BaseHeader extends React.Component {
    render() {
        return (<div>
                    <Wrapper>
                            {/* <Persona src={me} alt="My smiling picture" /> */}
                        
                                <Header>ASAF KEDEM</Header>
                    
                                <Subtitle>Software Scientist | Entrepreneur | Student</Subtitle>
                    </Wrapper>
                    <Divider />
                </div>

        );
    }
}

export default BaseHeader;

// const Persona = styled.img`
//     /* padding: 20px; */
//     border-radius: 50%;
//     scale: 10%;
//     align-self: initial;
// `;

// const Container = styled(Wrapper)`
//     background-color: red;
//     height: 50em;
//     justify-content: flex-start;
//     align-items: flex-start;
// `;