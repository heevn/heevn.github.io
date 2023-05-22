import MainContainer from '../components/MainContainer';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer> 
  );
}