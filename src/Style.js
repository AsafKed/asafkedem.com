import styled from 'styled-components'


export const theme = {
    bg: '#F2EEEE',
    primary: '#16262E',
    secondary: '#656566',
    faded: '#E7E4E4'
};

// TODO fix awkward white space with smaller screen
export const Application = styled.div`
    /* Set background */
    background: ${theme.bg};
    height: 100vh;

    /* Set centering */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;


    /* Font size (set up for rem usage) */
    font-size: 62.5%;
    /* So that 1rem = 10px */
`;

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
        if (props.justify == "top") return `top`;
        else if (props.justify == "bottom") return `bottom`;
        else return `center`;
    }};

 
    /* Choose inner spacing */
    align-items: ${props => {
        if (props.align == "left") {
            return `flex-start`;
        }
        else if (props.align == "right") {
            return `flex-end`;
        }
        else {
            return `center`;
        }
    }};
`;

// For the main name
export const H1 = styled.h1`
    font-family: 'Tw Cen MT';
    font-size: 5rem;
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

