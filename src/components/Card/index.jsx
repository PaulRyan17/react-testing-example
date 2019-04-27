import React from "react";

const Card = ({ handleClick }) => {
  return (
    <div className="card">
      <div className="text">
        <div className="action">
          <span>VISIT</span>
        </div>
        <div className="country">
          <span>Iceland</span>
        </div>
      </div>
      <button onClick={handleClick}>DISCOVER</button>
    </div>
  );
};

export default Card;
