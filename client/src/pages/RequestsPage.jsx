import React, { useEffect, useState } from "react";
import API from "../api/api";

const RequestsPage = () => {
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);

  const fetchRequests = async () => {
    const res = await API.get("/swap/requests");
    setIncoming(res.data.incoming);
    setOutgoing(res.data.outgoing);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const respond = async (id, accept) => {
    await API.post(`/swap/swap-response/${id}`, { accept });
    fetchRequests();
  };

  return (
    <div>
      <h2>Incoming Requests</h2>
      {incoming.map((req) => (
        <div key={req._id}>
          {req.mySlot.title} ↔ {req.theirSlot.title} 
          <button onClick={() => respond(req._id, true)}>Accept</button>
          <button onClick={() => respond(req._id, false)}>Reject</button>
        </div>
      ))}

      <h2>Outgoing Requests</h2>
      {outgoing.map((req) => (
        <div key={req._id}>
          {req.mySlot.title} ↔ {req.theirSlot.title} ({req.status})
        </div>
      ))}
    </div>
  );
};

export default RequestsPage;
