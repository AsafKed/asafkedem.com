import React from 'react';
import SkillLevel from './Skills/SkillLevel.jsx';
import styled from 'styled-components';
import { themeSubPages as theme } from '../../theme';
import ReactMarkdown from 'react-markdown';
import '../../style.css';
import SkillsRenderer from './Skills/SkillsRenderer.jsx';

const markdowns = [`
# Education
## TU/e | Eindhoven Technical University
### Bachelor Software Science | Sept. 2016–Feb. 2021
_With a focus on entrepreneurship, data science, and psychology (outside the primary track)._

## American School of Bombay | High School
### Primary and Secondary Education | Aug. 2004–May 2015
_A true international experience._
`,
`# Experience
## A Place For Now | Startup
### Founder & Chairman | Oct. 2019–Now
_Student housing is viciously competitive. Our team of 6 (computer & data scientists, UX & UI designers) is working to improve the search process._

## Auto Trendy | Blog
### Chief Editor | June 2020–Now
_Auto Trendy reports on the latest cars and trends in the industry in 1-5 minute reads. I use my English skills to polish and boost the articles._

## Cosmos | The International Student Association
### Chairman | July 2016–June 2017
_My leadership ability grew greatly here. We represented and supported international students in the TU/e and the city. I learned to manage a  small, volunteer team._
`
];

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
    padding-left: 10%;
`;

const Skills =
[
    {
        set: "Code",
        skills: 
            [{Java: 0.5,
            Python: 0.8,
            ReactJS: 0.7}]    
    }
]