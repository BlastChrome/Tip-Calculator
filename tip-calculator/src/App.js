import React from "react";

const App = () => {
  return (
    <>
      <body>
        <div className="container">
          <h1 className="header-txt">SPLI</h1>
          <h1 className="header-txt">TTER</h1>
          <div className="tip-body">
            <div className="top-left-section">
              <label htmlFor="bill">Bill</label>
              <input type="text" name="bill" />

              <label htmlFor="Tip">Select Tip %</label>
              <div className="btn-container">
                <button className="btn tip-btn">5%</button>
                <button className="btn tip-btn">10%</button>
                <button className="btn tip-btn">15%</button>
                <button className="btn tip-btn">25%</button>
                <button className="btn tip-btn">50%</button>
                <button className="btn tip-btn custom-btn">Custom</button>
              </div>
              <label htmlFor="Number">Number of People</label>
              <input type="text" name="Number" />
            </div>
            <div className="bot-right-section">Right Section</div>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
