import { authenticate } from '../API/auth';
import MainContainer from '../components/MainContainer';
import '../styles/global.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  //useEffect(() => {authenticate()}, [])
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer> 
  );
}