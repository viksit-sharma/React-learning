import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [likes, setlikes] = useState(0);
  let clicked = () => {
    setIsLiked(!isLiked);
    setlikes(!isLiked ? (likes = 1) : (likes = 0));
  };
  let likeStyle = { color: "red " };
  return (
    <div>
      <p onClick={clicked}>
        {isLiked ? (
          <i className="fa-solid fa-thumbs-up" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-thumbs-up"></i>
        )}
      </p>
      <p >{likes}</p>
    </div>
  );
}
