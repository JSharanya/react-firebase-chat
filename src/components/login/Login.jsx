import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvathar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = e => {
    if (e.target.files[0]) {
      setAvathar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleLogin = e =>{
    e.preventDefault()
    toast.warn("Hello")
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Accouts</h2>
       
        <form>
        <label htmlFor="file">
          <img src={avatar.url || "./avatar.png"} alt="" />
          Upload an Image{" "}
        </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          {/* <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" /> */}

          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
