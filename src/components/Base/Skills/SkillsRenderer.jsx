import React from 'react';
import SkillLevel from './SkillLevel.jsx';
import styled from 'styled-components';
import '../../../style.css'
import skills from '../../../texts/skills';

class SkillsRenderer extends React.Component {
    render() {
        return (
            <div>
                <FlexBox>
                    <h1>Skills</h1>
                </FlexBox>
                <FlexBox>
                    {skills.map(skill => (
                        <Wrapper>
                            <h2>{skill.set}</h2>
                            {Object.keys(skill.skills).map(key => (
                                <Wrapper>
                                    <h3>{key}</h3>
                                    <SkillLevel width={skill.skills[key]} />
                                </Wrapper>
                            ))
                            }
                        </Wrapper>
                    ))}
                </FlexBox>
                </div>
        )
    }
}

export default SkillsRenderer;

const Wrapper = styled.div`
    /* width: 50%; */
    /* padding-right: 10%; */
    flex: 1 0 50%;
    white-space: nowrap;
    /* text-align: center; */
    padding: 10px;
    box-sizing: border-box;
`;
const FlexBox = styled.div`
    /* padding-left: 10%; */
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;