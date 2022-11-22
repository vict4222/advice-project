import { useState, useRef } from "react";

function Card({ title, icon, onChange, index, ratio }) {
  const input = useRef(null);

  function convertMinutesToCO2(value) {
    // check if the input is empty
    if (value !== "") {
      return Math.round(ratio * value * 1000);
    }
    return 0;
  }

  return (
    <div className="converter-card">
      <h3>{title}</h3>
      <input
        type="number"
        min="0"
        placeholder="Input minutes"
        onBlur={() => onChange(convertMinutesToCO2(input.current.value), index)}
        ratio={ratio}
        ref={input}
      />
    </div>
  );
}

export default Card;

//parseInt(input.current.value, 10)