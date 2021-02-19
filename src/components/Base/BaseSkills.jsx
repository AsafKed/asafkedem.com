import React from 'react';
import SkillLevel from './Skills/SkillLevel.jsx';
import styled from 'styled-components';
import { themeSubPages as theme } from '../../theme';
import ReactMarkdown from 'react-markdown';
import '../../style.css';
import SkillsRenderer from './Skills/SkillsRenderer.jsx';
import markdowns from '../../texts/skills_experience';

class BaseAbout extends React.Component {
    render() {
        return (
            <div>
                <FlexBox>
                    {markdowns.map(markdown => (
                        <Wrapper>
                            <ReactMarkdown children={markdown} />
                        </Wrapper>
                    ))}
                </FlexBox>
                <SkillsRenderer />
            </div>
        )
    }
}

export default BaseAbout;

const Wrapper = styled.div`
    width: 50%;
    padding-right: 10%;
`;
const FlexBox = styled.div`
    display: flex;
    /* padding-left: 10%; */
    justify-content: space-between;
`;