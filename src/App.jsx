import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Button, Box} from '@mui/material';



function App() {
  
  const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  const [automobile_read, setAutomobileRead] = useState([]);
  const [automobile, setAutomobile] = useState([]);

  async function readdata(){

      try{
        
        const response = await fetch(url);
        const body = await response.json();
  
        setAutomobileRead(JSON.stringify(body));
      }catch(error){

        console.log("error == ", error);
      }
  };


  // dumpy data to check post method exist {response will be negative}
  async function create_automobile() {

      const response = await fetch(url, {
        method : 'POST',
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify([{
          "Country" : 'italy',
          "Mfr_CommonName" : 'ferrai',
          "Mfr_Name" : 'ferrari',
          "VehicleTypes" : {
            "IsPrimary":true,
            "Name":"Passenger Car",
          }  
        }]),
       });

       return await setAutomobile(JSON.stringify(response.json()));
  };

  return (
   <>
      <Button variant="text" onClick={readdata}>Read Automobile data </Button>
      <Box>{automobile_read}</Box>      
      <Button variant='text' onClick={create_automobile}> Create Automobile for you </Button>
      <Box>
        {automobile}
      </Box>
   </> 
  )
}

export default App
