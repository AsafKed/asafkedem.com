import { ThemeProvider } from 'styled-components';
import { Application, theme } from './theme'
import Home from './pages/Home.jsx'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Home />
      </Application>
    </ThemeProvider>
  );
}

export default App;