import React from 'react';
import styled from 'styled-components' 

const Biv = styled.div`
  margin: ${props => props.theme.margin};
  width: ${props => props.theme.width};
`

const Bio = (props) => {
  const { bio } = props
  return (
    <Biv>
      <h4> {bio} </h4>
    </Biv>
  );
}

export default Bio;