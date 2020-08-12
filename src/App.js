import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import Photo from './Photo'
import Card from './Card'

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=I9jb0hkm4gtwoqxV5ZsYAfBvaYvH4QX3SrGt8JAw')
    .then(response=> {
      
      setData(response.data)
      
    })
    .catch(error=>{
      console.log("error", error)
    })
  }, [])
  
 
  console.log("testing ", data)
  return (
    <div className="App">
       <Header data={data} />
       <Photo data={data}/>
       <Card data={data}/>
    </div>
  );
}

export default App;
