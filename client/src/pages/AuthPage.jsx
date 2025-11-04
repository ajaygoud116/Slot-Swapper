import React, { useState } from "react";
import LoginForm from "../components/loginform";
import RegisterForm from "../components/registrationform";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome to the Swap Scheduler</h1>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p style={{ marginTop: "10px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
