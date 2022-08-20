import React from "react";
import "./buttons.scss";
const Socials__Buttons = ({ image, text, background }) => {
  return (
    <button className="socials__buttons" style={{ background: background }}>
      <img src={image} alt="" />
      <p>CONTINUE WITH {text}</p>
    </button>
  );
};

export default Socials__Buttons;
