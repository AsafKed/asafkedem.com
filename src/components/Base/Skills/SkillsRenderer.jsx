import React from 'react';
import SkillLevel from './SkillLevel.jsx';
import styled from 'styled-components';
import '../../../style.css'

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
    padding-left: 10%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const skills =
[
    {
        set: "Code",
        skills: 
        {
            Java: 0.5,
            Python: 0.8,
            ReactJS: 0.7
        }    
    },
    {
        set: "Soft Skills",
        skills: 
        {
            "Transformational leadership": 0.85,
            "Intercultural communication": 0.95,
            "Conflict resolution": 0.8,
            "Public speaking": 0.7,
            Networking: 0.65
        }
    },
    {
        set: "Languages",
        skills:
        {
            English: 0.98,
            Hebrew: 0.85,
            Dutch: 0.25,
            "French (comprehension)": 0.4
        }
    },
    {
        set: "Other",
        skills:
        {
            Writing: 0.9,
            Meditation: 0.8,
            "Guitar & singing": 0.8
        }
    }
]