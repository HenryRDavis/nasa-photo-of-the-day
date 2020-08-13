
import React from 'react';

const style = {
  width: '65%',
  margin: '0 auto',
}

const Bio = (props) => {
  const { bio } = props
  return (
    <div>
      <h4 style={style}> {bio} </h4>
    </div>
  );
}

export default Bio;