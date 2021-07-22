import React, { useState } from "react";

const Bill = () => {
  const [bill, setBill] = useState(0);

  const updateBill = (e) => {
    setBill(e.target.value);
  };

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input type="text" name="bill" value={bill} onChange={updateBill} />
    </>
  );
};

export default Bill;
