// src/components/RequestList.jsx
import React from "react";

const RequestList = ({ requests, type, onAction }) => {
  if (requests.length === 0) {
    return <p>No {type === "incoming" ? "incoming" : "outgoing"} requests.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {requests.map((req) => (
        <li
          key={req.id}
          style={{
            border: "1px solid #056624ff",
            borderRadius: "8px",
            margin: "10px auto",
            width: "320px",
            padding: "10px",
            backgroundColor:
              req.status === "ACCEPTED"
                ? "#0ec141ff"
                : req.status === "REJECTED"
                ? "#0ebd1aff"
                : "#13d210ff",
          }}
        >
          {type === "incoming" ? (
            <>
              <p>
                <strong>{req.fromUser}</strong> wants to swap:
              </p>
              <p>
                <strong>Their slot:</strong> {req.offeredSlot}
              </p>
              <p>
                <strong>For your slot:</strong> {req.requestedSlot}
              </p>
            </>
          ) : (
            <>
              <p>
                You offered <strong>{req.offeredSlot}</strong> to{" "}
                <strong>{req.toUser}</strong>
              </p>
              <p>
                <strong>For their slot:</strong> {req.requestedSlot}
              </p>
            </>
          )}

          <p>Status: {req.status}</p>

          {type === "incoming" && req.status === "PENDING" && (
            <>
              <button
                onClick={() => onAction(req.id, "accept")}
                style={{ marginRight: "10px" }}
              >
                Accept
              </button>
              <button onClick={() => onAction(req.id, "reject")}>Reject</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RequestList;
