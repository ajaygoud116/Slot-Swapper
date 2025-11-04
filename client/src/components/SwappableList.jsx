// src/components/SwappableList.jsx
import React from "react";

const SwappableList = ({ slots, onRequestSwap }) => {
  if (slots.length === 0) {
    return <p>No swappable slots available.</p>;
  }

  return (
    <div>
      <h3>Available Swappable Slots</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {slots.map((slot) => (
          <li
            key={slot.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px auto",
              width: "320px",
              padding: "10px",
              backgroundColor: "#eef6ff",
            }}
          >
            <strong>{slot.title}</strong>
            <p>Date: {slot.date}</p>
            <p>Owner: {slot.owner}</p>
            <button onClick={() => onRequestSwap(slot)}>Request Swap</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwappableList;
