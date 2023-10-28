// create your App component here
// import React, { useState, useEffect } from "react";

// //const API_URL = `https://dog.ceo/api/breeds/image/random`

// function App() {

//   const [image, setImage] = useState(null)

// useEffect(()=> {
//   fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
//   .then(r=> r.json())
//   .then(data => setImage(data.image))
//   .catch((error)=> {
//     console.error("Error fetching dog image:", error);
//   })
// }, [])

// if (!image) {
//   return <h2>Loading...</h2>
// }

// return (
//   <>
//   <h1>DOG IMAGES</h1>
//   <p>Random dog</p>
//   <img src= {image} alt="A Random Dog"/>
//   </>
// );

// }


// export default App;



import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      });
  }, []); 

  return (
    <div>
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;




