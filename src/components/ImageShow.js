import React, { useState } from "react";

const ImageShow = ({ image }) => {
  const [emojiSize, setEmojiSize] = useState(20);
  const increaseEmojiSize = () => {
    setEmojiSize(emojiSize + 4);
  };
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img src={image} />
      <div
        style={{
          cursor: "pointer",
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: `${emojiSize}px`,
        }}
        onClick={increaseEmojiSize}
      >
        👍
      </div>
    </div>
  );
};

export default ImageShow;
