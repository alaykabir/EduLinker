import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div>
      <body>
        <section class="intro">
          <div class="container">
            <div class="left-col">
              <h1>Welcome back, Sir/Mam</h1>
              <p>
                Welcome to the official Sasta MIS. You can Literally fuck with
                Students here. From Giving them D in marksheet to giving D in
                theor mouth, everything is possible here.
              </p>
            </div>
            <div class="rigth-col">
              <div class="top-box">
                <p>
                  <span>Lets Get You </span>to Sign In
                </p>
              </div>
              <div class="form-container">
                <form action="#" autocomplete="off">
                  <div class="input-group">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <label for="password">Password</label>
                    <input
                      type="text"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button type="submit" class="">
                    Log In
                  </button>
                  <p class="form-footer">
                    Do not have an account?{" "}
                    <span>
                      <Link to="/register">Click here</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Login;
