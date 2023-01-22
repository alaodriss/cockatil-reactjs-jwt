import React, { useState } from "react";
import "./auth.css";

const Login = () => {
  // le state ce sont des var qui asyc entre le code et template

  //const [login, setLogin] = useState("");
  //const [password, setpassword] = useState("");

  // pour plusieurs inputs  on fait un objet dans le state

  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
  });

  // on fait la differance des values entre inputs avec le name de chaque inpute
  const onChange = (e) => {
    setCredentials({ 
         ...credentials, //etat inital 
         [e.target.name]: e.target.value }); // onfision
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="group">
        <label htmlFor="login"> Indentifiant</label>
        <input
          type="text"
          name="login"
          value={credentials.login}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <label htmlFor="password"> Mot de Passe </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <button> Connexion </button>
      </div>
    </form>
  );
};

export default Login;
