
import React from 'react';


const Image = (props) => {
  const { imageUrl, title } = props
  return (
    <div>
      <img src={imageUrl} alt={title}/>
    </div>
  );
}

export default Image;