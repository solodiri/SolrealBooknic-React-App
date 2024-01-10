import { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let myName = "solomon";
  let myPassword = "solodiri1";

  const submitHandle = (e) => {
    e.preventDafault();
    console.log("Form Changed");
  };
  const handleNameInput = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };
  // const handleClick = () => {
  //   console.log("Was Clicked");
  // };

  return (
    <div className="wrappercover">
      <div className="wrapper">
        <div className="form-wrapper sign-in">
          <form onSubmit={submitHandle}>
            <h2>LogIn</h2>
            <div className="input-point">
              <input
                type="text"
                // value="name"
                autoComplete=""
                required
                onChange={handleNameInput}
              />
              <label htmlFor="name">Enter Your Username</label>
            </div>
            <div className="input-point">
              <input
                type="password"
                // value="password"
                autoComplete=""
                required
                onChange={handlePasswordInput}
              />
              <label htmlFor="name">Enter Your Password</label>
            </div>
            <div className="remember">
              <label htmlFor="name">
                <input type="checkbox" />
                Remember Me
              </label>
            </div>
            {name === myName && password === myPassword ? (
              <Link to="/dashboard">
                <button className="submit">LogIn</button>
              </Link>
            ) : (
              <button
                style={{
                  color: "red",
                  background: "white",
                  textAlign: "center",
                }}
              >
                LogIn
              </button>
            )}

            <div className="signUp-link">
              <p>
                Don't have an account?<Link to="/SignUp"> SignUp</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
