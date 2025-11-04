import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{textAlign: "center",marginTop: "60px",backgroundImage: "url",backgroundSize: "cover",backgroundPosition:"center",height: "100vh"}}>
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <div style={{display: "flex", gap: "20px", position: "absolute", top: "40px", left: "20px" }}>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
        <button onClick={() => navigate("/marketplace")}>Go to Marketplace</button>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
        <button onClick={() => navigate("/notifications")}>View Requests</button>
      </div>

      <h1>Slot Swapper</h1>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p style={{textAlign:"right", top:"40px"}}>Email: {user?.email}</p>

      <button onClick={handleLogout} style={{position: "fixed",bottom: "20px",marginLeft: "20px",}}>Logout</button>
    </div>
    </div>
  );
};

export default HomePage;



{/* <button
  onClick={() => navigate("/profile")}
  style={{
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  }}
>
  Go to Profile
</button> */}
