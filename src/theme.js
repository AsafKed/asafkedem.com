import styled from 'styled-components'

export const theme = {
    bg: '#F2EEEE',
    primary: '#16262E',
    secondary: '#656566',
    faded: '#E7E4E4'
};

export const themeSubPages = {
    bg: '#21161F',
    header: '#32DE8A',
    h1: '#b58e58',
    h23: '#5DFF11',
    primaryup: '#703EC3',
    faded: '#C4C4C4',
    text: '#474747',
    text2: '#5d5d5d',
    skill: '#b77f31'
}

/**
 * Use as wrapper div for components
 */
export const Wrapper = styled.div`
    /* Set centering */
    display: flex;
    justify-content: space-around;
    text-align: left;
    align-items: center;
    flex-wrap: wrap;
`;

// TODO fix awkward white space with smaller screen
// Inherit Wrapper's style
export const Page = styled(Wrapper)`
    /* Set background */
    background: ${theme.bg};
    height: 100%;

    /* Font size (set up for rem usage) so that 1rem = 10px */
    font-size: 62.5%;
`;


// TODO design different sizes in Figma
// TODO enable different centering options (middle, left, right)
// TODO enable border and no border
export const Container = styled.div`
    /* Create container shape */
    height: 450px;
    width: 740px;
    margin: 10px;
    
    /* Set border */
    border: ${props => props.border ? `6px solid ${theme.primary}` : `none`};
    

    /* Center items within it */
    display: flex;
    flex-direction: column;


    justify-content: ${props => {
        if (props.justify === "top") return `top`;
        else if (props.justify === "bottom") return `bottom`;
        else return `center`;
    }};

 
    /* Choose inner spacing */
    align-items: ${props => {
        if (props.align === "left") {
            return `flex-start`;
        }
        else if (props.align === "right") {
            return `flex-end`;
        }
        else {
            return `center`;
        }
    }};
`;

// For the home page
export const H1 = styled.h1`
    font-family: 'Tw Cen MT';
    font-size: 7rem;
    text-transform: uppercase;
`;

// TODO once hovered over, keep highlighting unless another one is hovered over?
// For the side list
export const VSelector = styled.a`
    font-family: Mainframe, serif;
    font-size: 2rem;

    /* Inter-line spacing */
    margin: 0.5rem;

    color: ${theme.secondary};
    &:hover {
    color: ${themeSubPages.primaryup};
    };
    text-decoration: none;
`;

// For the home subtitle 
export const MainSubtitle = styled.h3`
    font-family: Sanchez;
    font-size: 1.4rem;
    color: #000;
`;

/* FOR THE SUBPAGES */

export const SubPage = styled.div`
    /* background: ${themeSubPages.bg}; */
    /* display: -webkit-box; */
    width: 80%;
    margin-top: 2.5%;
    margin-bottom: 5%;
    border-radius: 26px;
    padding: 4rem;
    top: -50px;
    min-height: 80%;
`;

export const SubPageContainer = styled.div`
    padding: 20px;
    background-color: red;
`;

export const Divider = styled.div`
    width: 83.5%;
    height: 1px; 
    background-color: ${themeSubPages.text2};
    margin: 0 auto; /* horizontal centering */
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Header = styled.h1`
    font-family: Roboto;
    font-size: 4.8rem;
    color: ${themeSubPages.text};
    /* margin-left: 2rem; */
    margin-top: 0;
    margin-bottom: 0;
    `;

export const Subtitle = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-family: Roboto;
    font-style: italic;
    font-size: 2.4rem;
    color: ${themeSubPages.text};
    /* margin: 0px; */
`;

export const SubHeader = styled.h2`
    font-family: Roboto;
    font-size: 3.6rem;
    color: ${themeSubPages.text};
`;

export const SubsubHeader = styled.h3`
    font-family: Roboto;
    font-size: 2.4rem;
    color: ${themeSubPages.text};
`;

export const LongText = styled.p`
    font-family: Roboto;
    font-size: 1.4rem;
    color: ${themeSubPages.faded};
    /* color: #ffffff; */
    white-space: pre-wrap;
    font-style: italic;
    line-height: 1.5;
    width: 83%;
    text-indent: 2.8rem;
`;

export const IMG = styled.img`
    cursor: pointer;
`;

// To make surround a container and make it clickable
export const Clickable = styled.a`
    text-decoration: none;
`;

/////////////////////////////////////////
// SKILLS
/////////////////////////////////////////

export const SkillBG = styled.div`
    width: 200px;
    height: 10px;
    background-color: ${themeSubPages.faded};
    border-radius: 2px;
`;

export const SkillFG = styled.div`
    /* width: calc (${props => props.width} * 200); */
    height: 10px;
    background-color: ${themeSubPages.skill};
    border-radius: 2px;
`;