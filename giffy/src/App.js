import React, {useState, useEffect} from 'react'
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=zqJvk5Qlzf6PMSBwpWUyEJESvXhJd0cp&q=panda&limit=15&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    //setGifs(DIFGIFS)
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
