import React, { useEffect, useState } from "react";
import API from "../api/api";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEvent = async () => {
    await API.post("/events", { title, startTime, endTime, status: "BUSY" });
    fetchEvents();
  };

  const toggleSwappable = async (eventId, currentStatus) => {
    await API.put(`/events/${eventId}/status`, {
      status: currentStatus === "BUSY" ? "SWAPPABLE" : "BUSY",
    });
    fetchEvents();
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <button onClick={createEvent}>Add Event</button>

      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} ({event.status})
            {event.status !== "SWAP_PENDING" && (
              <button onClick={() => toggleSwappable(event._id, event.status)}>
                {event.status === "BUSY" ? "Make Swappable" : "Make Busy"}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPage;
