// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import EventList from "../components/Eventlist";
import EventForm from "../components/Eventform";

const DashboardPage = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Team Meeting", date: "2025-11-10", status: "BUSY" },
    { id: 2, title: "Yoga Class", date: "2025-11-12", status: "FREE" },
  ]);

  // Add new event
  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
  };

  // Toggle event status
  const toggleSwappable = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? {
              ...event,
              status: event.status === "BUSY" ? "SWAPPABLE" : "BUSY",
            }
          : event
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Your Dashboard</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} onToggle={toggleSwappable} />
    </div>
  );
};

export default DashboardPage;
