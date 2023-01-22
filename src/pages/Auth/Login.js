import React, { useState } from "react";
import "./auth.css";

const Login = () => {


    // le state ce sont des var qui asyc entre le code et template 

  const [login, setLogin] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("kika");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="group">
        <label htmlFor="login"> Indentifiant</label>
        <input
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="group">
        <label htmlFor="password"> Mot de Passe </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="group">
        <button> Connexion </button>
      </div>
    </form>
  );
};

export default Login;
