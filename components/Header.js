import styles from "../styles/Header.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const [isemail, setEmail] = useState("");
  const [ispassword, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogedIn, setIsLoggedIn] = useState(false);

  function log() {
    setEmail(document.getElementById("exampleFormControlInput1").value);
    setPassword(document.getElementById("exampleFormControlInput2").value);
    signInWithEmailAndPassword(auth, isemail, ispassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoggedIn(true);
        window.open("/", "_self");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoggedIn(false);
      });
  }
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.HeaderTop}>
          <img src="/Assets/CY-Bock.png" />
          <div
            className={styles.divlogin}
            onClick={(e) => {
              setIsOpen(true);
            }}
          >
            <a>Login</a>
          </div>
        </div>
        {isOpen ? (
          <center>
            <div className={styles.logindiv} id="logindiv">
              <div className={styles.upper}>
                <i
                  className="bi bi-arrow-left"
                  onClick={(e) => {
                    setIsOpen(false);
                  }}
                ></i>
              </div>
              <div className={styles.mid}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className={styles.lower}>
                <div
                  className={styles.divlogin}
                  onClick={(e) => {
                    log();
                  }}
                >
                  <a>Login</a>
                </div>
              </div>
            </div>
          </center>
        ) : (
          <div className={styles.details} id="details">
            <h1>Some Details Here Later</h1>
          </div>
        )}
      </>
    );
  }
}
