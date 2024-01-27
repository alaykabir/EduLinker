import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

function Register() {
  return (
    <div>
      <body>
        <section class="intro">
          <div class="container">
            <div class="left-col">
              <h1>Hola Sir/Mam</h1>
              <p>
                Welcome to the official Sasta MIS. You can Literally fuck with
                Students here. From Giving them D in marksheet to giving D in
                theor mouth, everything is possible here.
              </p>
            </div>
            <div class="rigth-col">
              <div class="top-box">
                <p>
                  <span>Lets Get You </span>to Sign Up.
                </p>
              </div>
              <div class="form-container">
                <form action="#" autocomplete="off">
                  <div class="input-group">
                    <label for="firstName"> Name</label>
                    <input type="text" id="name" placeholder="Name" required />
                  </div>
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
                    Register
                  </button>
                  <p class="form-footer">
                    You already have an account?{" "}
                    <span>
                      <Link to="/login">Click here</Link>
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

export default Register;
