
import React, { useState } from "react";
import axios from "axios";
 import { useCookies } from "react-cookie";
 import { useNavigate } from "react-router-dom";
export default function Register() {
  return <RegisterButton />;
}

const RegisterButton = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        await axios.post("http://localhost:3001/auth/register", {
          username,
          password,
        });
        alert("Registration Completed! Now login.");
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="Register">
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="name@example.com"
            data-temp-mail-org="0"
          />
          <label htmlfor="username">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <label htmlfor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};