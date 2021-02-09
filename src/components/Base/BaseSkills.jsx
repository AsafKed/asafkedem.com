import React from 'react';
import SkillLevel from './Skills/SkillLevel.jsx';
import styled from 'styled-components';
import { themeSubPages as theme } from '../../theme';

class BaseAbout extends React.Component {
    render() {
        return (
            <FlexBox>
                <Wrapper>
                    <H1>Test</H1>
                    <H2>Test</H2>
                    <H3>Test</H3>
                    <Text>Test</Text>
                    <SkillLevel width={0.9}/>
                </Wrapper>
            </FlexBox>
        )
    }
}

export default BaseAbout;

const H1 = styled.h1`
    font-family: "Roboto";
    color: ${theme.primary};
    font-size: 36px;
`;
const H2 = styled.h2`
    font-family: "Roboto";
    color: ${theme.primary};
    font-size: 24px;
`;
const H3 = styled.h3`
    font-family: "Roboto";
    color: ${theme.faded};
    font-size: 24px;
`;
const Text = styled.p`
    font-family: "Roboto";
    color: white;
    font-size: 18px;
`;

const Wrapper = styled.div`
    width: 50%;
`;

const FlexBox = styled.div`
    display: flex;
    padding-left: 10%;
`;