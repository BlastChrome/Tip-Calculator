import React from "react";

const Total = () => {
  return (
    <>
      <div className="seperator-div">
        <div className="text-container">
          <p>
            Tip Amount <span> / person</span>
          </p>
          <h2>$4.27</h2>
        </div>
        <div className="text-container">
          <p>
            Total <span> / person</span>
          </p>
          <h2>$32.79</h2>
        </div>
      </div>
      <div className="button-container">
        <button className="btn reset-btn">Reset</button>
      </div>
    </>
  );
};

export default Total;
