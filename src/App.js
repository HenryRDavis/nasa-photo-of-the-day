import React from "react";
import "./App.css";
import axios from 'axios'

// useEffect(() => {
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=kK5PvJj8yG0dvMl9GesPhOe0lRahN7pS5RC9GJfG')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//   })
// }, [])

function App() {
  return (
    <>
<header>
  <a href='#'></a>
  <a href='#'></a>
  <a href='#'></a>
</header>
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>:rocket:</span>!
      </p>
    </div>
    </>
  );
}
export default App;
