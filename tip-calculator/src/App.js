import React from "react";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import People from "./components/People";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <body>
        <div className="container">
          <h1 className="header-txt">SPLI</h1>
          <h1 className="header-txt">TTER</h1>
          <div className="tip-body">
            <div className="top-left-section">
              <Bill />
              <Tip />
              <People />
            </div>
            <div className="bot-right-section">
              <div className="total-container">
                <Total />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
