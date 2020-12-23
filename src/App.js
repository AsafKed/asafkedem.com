import { ThemeProvider } from 'styled-components';
import { Application, theme } from './Style'
import Home from './pages/Home'



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