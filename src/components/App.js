import React, { useState } from "react";
import ImageShow from "./ImageShow";
const App = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const handleImage = () => {
    const newImage = `https://picsum.photos/200?random=${Math.random()}`;
    setImages([...images, newImage]);
    setCount(count + 1);
  };
  console.log(images);

  return (
    <>
      <button onClick={handleImage}> Resim Ekle </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((image, index) => (
          <ImageShow key={index} image={image} />
        ))}
      </div>
      <p>Eklenen Resim : {count}</p>
    </>
  );
};

export default App;
