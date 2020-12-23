import styled, { ThemeProvider } from 'styled-components';
import { Application, theme } from './theme'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
      <Application>
        <Home />
      </Application>
      <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`;