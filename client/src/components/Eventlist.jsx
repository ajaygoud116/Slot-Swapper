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
              border: "1px solid #e11c1cff",
              borderRadius: "8px",
              margin: "10px auto",
              width: "300px",
              padding: "10px",
              backgroundColor:
                event.status === "SWAPPABLE" ? "#14d149ff" : "#53f42fff",
            }}
          >
            <strong>{event.title}</strong>
            <p>{event.date}</p>
            <p>{event.startTime}</p>
            <p>{event.endTime}</p>
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
