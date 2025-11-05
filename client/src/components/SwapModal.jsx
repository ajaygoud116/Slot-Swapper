// src/components/SwapModal.jsx
import React, { useState } from "react";

const SwapModal = ({ mySlots, onClose, onSendSwap }) => {
  const [selectedMySlot, setSelectedMySlot] = useState(null);

  const handleConfirm = () => {
    if (!selectedMySlot) return alert("Please select one of your slots to offer");
    onSendSwap(selectedMySlot);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#11d037ff",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h3>Select one of your slots to swap</h3>

        {mySlots.length === 0 ? (
          <p>You have no swappable slots.</p>
        ) : (
          <select
            onChange={(e) => setSelectedMySlot(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          >
            <option value="">-- Select your slot --</option>
            {mySlots.map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.title} ({slot.date})
              </option>
            ))}
          </select>
        )}

        <button onClick={handleConfirm} style={{ marginRight: "10px" }}>
          Send Request
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SwapModal;
