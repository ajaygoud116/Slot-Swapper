// src/components/EventForm.jsx
import React, { useState } from "react";

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert("Please fill all fields");
    onAddEvent({ title, date, status: "BUSY" });
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Create New Event</h3>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
