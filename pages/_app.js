import MainContainer from '../components/MainContainer';
import '../styles/global.css';
import { useEffect } from 'react';
import { authenticate } from "../API/auth";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    authenticate() //не удалять!!!!!!
    if(!Array.isArray(JSON.parse(localStorage.getItem(`vacancy_id`)))){
        localStorage.setItem(`vacancy_id`, JSON.stringify([]))
    }
    //fetchData.then((data) => {setItems(data.data.objects)}).catch(e=> console.log(e))
}, [])
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer> 
  );
}