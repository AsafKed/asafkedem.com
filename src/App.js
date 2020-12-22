import styled, { ThemeProvider } from 'styled-components';

const theme = {
  bg: '#F2EEEE',
  primary: '#16262E',
  secondary: '#656566',
  fade: '#E7E4E4'
};

const Application = styled.div`
  background: ${theme.bg};
  height: 100vh;
  /* TODO add font family */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

// TODO design different sizes in Figma
const Container = styled.div`
  height: 450px;
  width: 740px;
  margin: 10px;
  background: red;
  color: ${theme.primary};
  border: 3px solid ${theme.primary};
`;

// For the main name
const H1 = styled.h1`

`;

// For the side list
const H3 = styled.h3`

`;

// For the subtitle 
const H5 = styled.h5`

`;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Container>Container 1</Container>
        <Container>Container 2</Container>
      </Application>
    </ThemeProvider>
  );
}

export default App;