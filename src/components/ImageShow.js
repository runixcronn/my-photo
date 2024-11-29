import React, { useState } from "react";

const ImageShow = ({ image }) => {
  const [emojiSize, setEmojiSize] = useState(20);
  const increaseEmojiSize = () => {
    setEmojiSize(emojiSize + 4);
  };
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src={image}
        onClick={increaseEmojiSize}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: `${emojiSize}px`,
        }}
      >
        👍
      </div>
    </div>
  );
};

export default ImageShow;
