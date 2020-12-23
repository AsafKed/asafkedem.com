import styled from 'styled-components'


export const theme = {
    bg: '#F2EEEE',
    primary: '#16262E',
    secondary: '#656566',
    faded: '#E7E4E4'
};

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

export const Flexbox = styled.div`
    display: flex;
`;

// TODO design different sizes in Figma
// TODO enable different centering options (middle, left, right)
// TODO enable border and no border
export const Container = styled.div`
        /* Create container shape */
    height: 450px;
    width: 740px;
    margin: 10px;
    
    border: ${props => props.border ? `6px solid ${theme.primary}` : `none`};
    

    /* Center items within it */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

// For the main name
export const H1 = styled.h1`
    font-family: 'Tw Cen MT';
    font-size: 5rem;
    text-transform: uppercase;
`;

// For the side list
export const H3 = styled.a`
    font-family: Mainframe, serif;
    font-size: 3rem;

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

