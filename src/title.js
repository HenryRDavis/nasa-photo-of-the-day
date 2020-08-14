  
import React from 'react';
import styled from 'styled-components' 

const Title = (props) => {
  const { title } = props
  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
}

export default Title;