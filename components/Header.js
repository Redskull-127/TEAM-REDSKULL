import styles from "../styles/Header.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HomeScreen from "../pages/screens/HomeScreen";
import Link from "next/link";
import Draggable, { DraggableCore } from "react-draggable";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Headers() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isemail, setEmail] = useState("");
  const [ispassword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [isScroll, setIsScroll] = useState(true);

  function tip() {
    alert("For hackmanthan you`re welcome, please login without credintials");
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
    tip();
    if (navigator.userAgent.indexOf("Android") > -1) {
      setIsAndroid(true);
    }
  }, []);

 
  if (isAndroid) {
    alert(
      "You may not be able to use the app on this device as its not properly optimized for this device. Although give a try!"
    );
  }

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
      <center>
        <div style={{ marginTop: "50px" }}>
          <h1>{error}</h1>
          <button
            className="btn btn-success"
            onClick={(e) => {
              setError(false);
            }}
          >
            Back To Home
          </button>
        </div>
      </center>
    );
  } else {
    return (
      <>
        <div className={styles.info} id="info">
          <i
            className="bi bi-x-lg"
            onClick={(e) => {
              const cls = document.getElementById("info");
              cls.style.display = "none";
            }}
          ></i>
          <div className={styles.infotext}>
            <h1>Click this option at top left to translate into hindi!</h1>
            <h1 translate="no">
              हिंदी में अनुवाद करने के लिए ऊपर बाईं ओर इस विकल्प पर क्लिक करें!
            </h1>
          </div>
          <img src="/Assets/info.png" />
          <div className={styles.infotip}>
            <p>You will get this option on each page!</p>
            <p translate="no">यह विकल्प आपको हर पेज पर मिलेगा!</p>
          </div>
        </div>
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
            <img className={styles.vector} src="/Vector/Vector.png" />
            <img className={styles.vector2} src="/Vector/Vectorinverted.png" />
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
                <div className={styles.divlogin} style={{ marginTop: "20px" }}>
                  <Link href="screens/HomeScreen">
                    <a>Login without credintials</a>
                  </Link>
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
                <img
                  src="/Assets/computer.png"
                  title="security is key for privacy"
                />
              </div>
            </Draggable>
            <p id="infop" style={{ marginTop: "30px" }}>
              Upper image is dragable
            </p>
            <h3 id='scroll'>Scroll Down</h3>
            <div className={styles.content}>
              <div className={styles.points} data-aos="fade-up">
                <h1 className={styles.heading}>INTRODUCTION</h1>
                <p data-aos="fade-left">
                  As the crime are increasing in the today`s world, where it is
                  a cyber crime or physical crime it is important to manage the
                  information of such criminal activities in a proper way so
                  that police associates can get help from this data to solve
                  case easily. so by taking this perspective in our mind our
                  team has created a web application to store and retrive the
                  data of such criminals.
                </p>
                <p data-aos="fade-right">
                  The main motive of this project is to give the ease of
                  Technology to the Cops to manage the Data related to Criminals
                  and Crime. We also focused on the making the process of
                  finding data related to criminals easier. By asking for
                  different attributes related to the Criminal and Crime while
                  creating a new record helps us to make finding the record
                  easier by using attributes to our need like hair color, birth
                  mark, tattoo, any special traits and many more to that.
                </p>
                <p data-aos="fade-left">
                  However, the workload quickly became too much for one person,
                  that`s we have created this platform to manage the data of
                  criminals and retrieve it when needs arises. And we have also
                  added glimpse of all over data in the graphical method which
                  becomes easier for cop`s to know the current crime records.
                </p>
                <p data-aos="fade-right">
                  We have used mainly used technology like ReactJs, Firebase ,
                  javascript, nodeJs and various Opensource technologies to
                  build this web application and API`s to fetch real and
                  accurate data of criminals in india.
                </p>
                <p data-aos="fade-left">
                  Our web application is based on the Track-5 problem statement
                  which is given in the HACKMANTHAN hackethon. This application
                  is created with the terms and conditions given by them and
                  also taking a real world problem in the our mind we have
                  completed this project.
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
