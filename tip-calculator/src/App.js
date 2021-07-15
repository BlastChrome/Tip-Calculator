import React from "react";

const App = () => {
  return (
    <div className="container">
      <h1 className="header-txt-1">SPLI</h1>
      <h1 className="header-txt-2">TTER</h1>
      <div className="tip-container">
        <div className="container">
          <div className="top-left-section">
            <label className="select-txt" htmlFor="bill">
              Bill
            </label>
            <input type="text" name="bill" />
            <p className="select-txt">Select Tip %</p>
            <div className="tip-btn-container">
              <button className="btn">5%</button>
              <button className="btn">5%</button>
              <button className="btn">5%</button>
              <button className="btn">5%</button>
              <button className="btn">5%</button>
              <button className="btn">5%</button>
            </div>
          </div>

          <div className="bottom-right-section">Bottom/Right</div>
        </div>
      </div>
    </div>
  );
};

export default App;
