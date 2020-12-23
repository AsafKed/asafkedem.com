import styled from 'styled-components'

export const theme = {
    bg: '#F2EEEE',
    primary: '#16262E',
    secondary: '#656566',
    faded: '#E7E4E4'
};

/**
 * Use as wrapper div for components
 */
export const Wrapper = styled.div`
    /* Set centering */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

// TODO fix awkward white space with smaller screen
// Inherit Wrapper's style
export const Application = styled(Wrapper)`
    /* Set background */
    background: ${theme.bg};
    height: 92vh;

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
export const H3 = styled.a`
    font-family: Mainframe, serif;
    font-size: 2rem;

    /* Inter-line spacing */
    margin: 0.5rem;

    color: ${theme.faded};
    &:hover {
    color: ${theme.secondary};
    };
    text-decoration: none;
`;

// For the subtitle 
export const H5 = styled.h5`
    font-family: Sanchez;
    font-size: 1.4rem;
    color: #000;
`;

export const IMG = styled.img`
    cursor: pointer;
`;

// To make surround a container and make it clickable
export const Clickable = styled.a`
    text-decoration: none;
`;