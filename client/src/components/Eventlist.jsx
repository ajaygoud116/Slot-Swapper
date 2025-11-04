// src/components/EventList.jsx
import React from "react";

const EventList = ({ events, onToggle }) => {
  if (events.length === 0) {
    return <p>No events yet. Create one above!</p>;
  }

  return (
    <div>
      <h3>Your Events</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event) => (
          <li
            key={event.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px auto",
              width: "300px",
              padding: "10px",
              backgroundColor:
                event.status === "SWAPPABLE" ? "#d4f4dd" : "#f0f0f0",
            }}
          >
            <strong>{event.title}</strong>
            <p>{event.date}</p>
            <p>Status: {event.status}</p>
            <button onClick={() => onToggle(event.id)}>
              {event.status === "BUSY"
                ? "Make Swappable"
                : "Mark as Busy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
