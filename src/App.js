import styled, { ThemeProvider } from 'styled-components';

const theme = {
  bg: '#F2EEEE',
  primary: '#16262E',
  secondary: '#656566',
  faded: '#E7E4E4'
};

const Application = styled.div`
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

// TODO design different sizes in Figma
// TODO enable different centering options (middle, left, right)
// TODO enable border and no border
const Container = styled.div`
  /* Create container shape */
  height: 450px;
  width: 740px;
  margin: 10px;
  
  border: 6px solid ${theme.primary};

  /* Center items within it */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// For the main name
const H1 = styled.h1`
  font-family: 'Tw Cen MT';
  font-size: 5rem;
  text-transform: uppercase;
`;

// For the side list
const H3 = styled.a`
  font-family: Mainframe, serif;
  font-size: 3rem;

  color: ${theme.faded};
  &:hover {
    color: ${theme.secondary};
  };
  text-decoration: none;
`;

// For the subtitle 
const H5 = styled.h5`
  font-family: Sanchez;
  font-size: 1.4rem;
  color: #000;
`;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Container border="true">
          <H1>Asaf Kedem</H1>
          <H5>This is my website!</H5>
        </Container>
        <Container>
          <H3 href="projects">Projects</H3>
          <H3 href="skills">Skills</H3>
          <H3 href="blog">Entrepreneurial Blog</H3>
        </Container>
      </Application>
    </ThemeProvider>
  );
}

export default App;