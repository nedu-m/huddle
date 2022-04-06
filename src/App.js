import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import Theme from './components/styles/Theme.styled';


function App() {
  return (
    <ThemeProvider theme = {Theme}>
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello world</h1>
      </Container>
      </>
    </ThemeProvider>
  );
  
}

export default App;
