import React from "react";

const ChangeView = ({ view, setView }) => {
  return (
    <>
      <section>
        <label htmlFor="">View:</label>
        <select
          onChange={(e) => setView(e.target.value)}
          className="border border-black px-1 py-1 ml-1 rounded-md text-black"
        >
          <option value="side-side">Side by Side</option>
          <option value="top-down">Top Down</option>
        </select>
      </section>
    </>
  );
};

export default ChangeView;
