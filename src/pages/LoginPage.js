import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input"
            value="User"
            type="text"
            placeholder="Username"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
