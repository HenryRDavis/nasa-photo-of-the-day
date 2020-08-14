
import React, { useState, useEffect } from "react";
import Image from './Pics'
import Title from './Title'
import Thing from './Thing'
import More from './More'
import axios from 'axios'
import {BASE_URL, API_KEY} from './Exports'
import styled from 'styled-components'
import "./App.css";

const Div = styled.div`
  font-family: ${props=>props.theme.fontFamily};
  text-align: ${props=>props.theme.textAlign};
  margin: ${props=>props.theme.margin};
  color: ${props=>props.theme.color};
  font-size: ${props=>props.theme.fontSize};
`

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
    <Div>
      <Title title={props.title}/>
      <Image imageUrl={props.url} title={props.title}/>
      <Thing bio={props.explanation}/>
      <More name={props.copyright}/>
    </Div>
  );
}

export default App;