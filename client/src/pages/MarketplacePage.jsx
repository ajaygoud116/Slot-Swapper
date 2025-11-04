// src/pages/MarketplacePage.jsx
import React, { useState } from "react";
import SwappableList from "../components/SwappableList";
import SwapModal from "../components/SwapModal";

const MarketplacePage = () => {
  // Mock Data (Other users' swappable slots)
  const [availableSlots] = useState([
    { id: 101, title: "Team Meeting", date: "2025-11-12", owner: "User A" },
    { id: 102, title: "Focus Block", date: "2025-11-13", owner: "User B" },
  ]);

  // Mock Data (My own swappable slots)
  const [mySwappableSlots] = useState([
    { id: 201, title: "Code Review", date: "2025-11-10" },
    { id: 202, title: "Design Session", date: "2025-11-11" },
  ]);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleRequestSwap = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleSendSwap = (mySlotId) => {
    setShowModal(false);
    setConfirmation(
      `✅ Swap request sent for "${selectedSlot.title}" using your slot #${mySlotId}`
    );
    // Later: make POST /api/swap-request call here
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Marketplace</h1>
      <p>See other users’ swappable slots and request swaps.</p>

      <SwappableList slots={availableSlots} onRequestSwap={handleRequestSwap} />

      {showModal && (
        <SwapModal
          mySlots={mySwappableSlots}
          onClose={() => setShowModal(false)}
          onSendSwap={handleSendSwap}
        />
      )}

      {confirmation && <p style={{ marginTop: "20px" }}>{confirmation}</p>}
    </div>
  );
};

export default MarketplacePage;
