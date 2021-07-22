import React from "react";

const Tip = () => {
  return (
    <>
      <label htmlFor="Tip">Select Tip %</label>
      <div className="btn-container">
        <button className="btn tip-btn">5%</button>
        <button className="btn tip-btn">10%</button>
        <button className="btn tip-btn">15%</button>
        <button className="btn tip-btn">25%</button>
        <button className="btn tip-btn">50%</button>
        <button className="btn tip-btn custom-btn">Custom</button>
      </div>
    </>
  );
};

export default Tip;
