
import React, { useState, useEffect } from "react";
import Image from './Pics'
import Title from './Title'
import Thing from './Thing'
import More from './More'
import reactDOM from 'react-dom'
import axios from 'axios'
import {BASE_URL, API_KEY} from './Exports'
import "./App.css";

function App() {
  const [props, setprops] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => 
        setprops(res.data
          ))
      .catch(err => 
        console.log(err, `And I oop`
        ))
  }, [])

  return (
    <div className="App">
      <Title title={props.title}/>
      <Image imageUrl={props.url} title={props.title}/>
      <Thing bio={props.explanation}/>
      <More name={props.copyright}/>
    </div>
  );
}

export default App;