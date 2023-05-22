import React from "react";
import "./Dropdown.css";

const Dropdown = ({ data, setDiffucultyData }) => {
  return (
    <div className="dropdown">
      <select onChange={(e) => setDiffucultyData(e.target.value)} name="" id="">
        {data.map((datas, index) => (
          <option value={datas}>{datas}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
