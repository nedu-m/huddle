import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from './components/styles/Container.styled';
import Theme from './components/styles/Theme.styled';
import content from './Content';
import Card from './components/Card';


function App() {
  return (
    <ThemeProvider theme = {Theme}>
      <>
      <GlobalStyles />
      <Header />
      <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
        ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
  
}

export default App;
