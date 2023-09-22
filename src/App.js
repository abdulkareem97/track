import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    
   async function loc() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const d = {
              latitude,
              longitude
            }
            // const data = await axios.post('http://192.168.0.198:1000/post',d)
            const data = await axios.post('http://192.168.0.198:1000/post',d)
            console.log(data)
            
            // console.log(latitude, longitude);
          },
          (error) => {
            // Handle geolocation error
            console.error('Error getting current location:', error);
          }
          );
        } else {
          // Geolocation is not supported in the browser
          console.error('Geolocation is not supported.');
        }
      }
      loc();
  }, [])

  return (
    <>
    </>

  );
}

export default App;
