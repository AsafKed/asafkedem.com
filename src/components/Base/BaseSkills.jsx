import React from 'react';
import SkillLevel from './Skills/SkillLevel.jsx';
import styled from 'styled-components';
import { themeSubPages as theme } from '../../theme';
import ReactMarkdown from 'react-markdown';

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

const Header2 = {
    content: ["TU/e | Eindhoven Technical University", "American School of Bombay | High School ",
              "A Place For Now | Startups","Auto Trendy | Blog","Cosmos | International Student Association"
            //   ,"Code", "Soft Skills", "Languages", "Other"
            ],
    key: [0, 0, 1, 1, 1]
};

const Header3 = {
    content: ["Bachelor Software Science | Sept. 2016–Feb. 2021",
              "Founder & Chairman | Oct. 2019–Now",
              "Chief Editor | June 2020–Now",
              "Chairman | July 2016–June 2017"],
    key: [0, 1, 1, 1]
}

class BaseAbout extends React.Component {
    render() {
        return (
            <FlexBox>
                {markdowns.map(markdown => (
                    <Wrapper>
                        <ReactMarkdown children={markdown} />
                    </Wrapper>
                ))}
            </FlexBox>
        )
    }
}

export default BaseAbout;


                // <Wrapper>
                //     {/* <H1>Test</H1>
                //     <H2>Test</H2>
                //     <H3>Test</H3>
                //     <Text>Test</Text>
                //     <SkillLevel width={0.9}/> */}
                //     <ReactMarkdown children={markdown1}
                //     renderers={{
                //         "h1": H1,
                //         h2: H2
                //     }} />
                // </Wrapper>