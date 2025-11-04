// src/pages/NotificationsPage.jsx
import React, { useState } from "react";
import RequestList from "../components/RequestList";

const NotificationsPage = () => {
  // Mock data for Incoming Requests (from others)
  const [incomingRequests, setIncomingRequests] = useState([
    {
      id: 1,
      fromUser: "User A",
      offeredSlot: "Focus Block (Nov 13)",
      requestedSlot: "Team Meeting (Nov 10)",
      status: "PENDING",
    },
    {
      id: 2,
      fromUser: "User B",
      offeredSlot: "Client Call (Nov 12)",
      requestedSlot: "Code Review (Nov 11)",
      status: "PENDING",
    },
  ]);

  // Mock data for Outgoing Requests (sent by me)
  const [outgoingRequests, setOutgoingRequests] = useState([
    {
      id: 3,
      toUser: "User C",
      offeredSlot: "Team Meeting (Nov 15)",
      requestedSlot: "Research Time (Nov 14)",
      status: "PENDING",
    },
  ]);

  // Handle Accept/Reject logic
  const handleResponse = (id, action) => {
    setIncomingRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: action === "accept" ? "ACCEPTED" : "REJECTED" }
          : req
      )
    );
    // Later: POST /api/swap-response with (requestId, accepted: true/false)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Notifications & Requests</h1>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
        <div>
          <h2>Incoming Requests</h2>
          <RequestList
            requests={incomingRequests}
            type="incoming"
            onAction={handleResponse}
          />
        </div>

        <div>
          <h2>Outgoing Requests</h2>
          <RequestList requests={outgoingRequests} type="outgoing" />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
