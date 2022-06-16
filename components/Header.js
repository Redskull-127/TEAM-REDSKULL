import styles from "../styles/Header.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HomeScreen from "../pages/screens/HomeScreen";
import Link from "next/link";
import Draggable, { DraggableCore } from "react-draggable";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const [isemail, setEmail] = useState("");
  const [ispassword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogedIn, setIsLoggedIn] = useState(false);
  if (isLogedIn) {
    window.open("/screens/HomeScreen", "_self");
  }
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handlepass = (event) => {
    setPassword(event.target.value);
  };

  function log() {
    signInWithEmailAndPassword(auth, isemail, ispassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setError(true);
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
          <img src="https://i.ibb.co/xCXrwbW/CY-Bock.png" />
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
                    onChange={handleChange}
                    value={isemail}
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
                    onChange={handlepass}
                    value={ispassword}
                    type="password"
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
            <h1>Developed by TEAM REDSKULL</h1>
            <Draggable
              onStart={(e) => {
                const info = document.getElementById("infop");
                info.style.display = "none";
              }}
              onStop={(e) => {
                const info = document.getElementById("infop");
                info.style.display = "block";
              }}
              axis="x"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
            >
              <div className="handle">
                <img src="/Assets/computer.png" title="security is key for privacy"/>
              </div>
            </Draggable>
            <p id="infop" style={{marginTop: '50px'}}>Upper image is dragable</p>
          </div>
        )}
      </>
    );
  }
}
