import styles from "../../styles/HomeScreen.module.css";
import { auth } from "../../firebase/FirebaseConfig";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

export default function HomeScreen() {
  const [bgCol, setbgCol] = useState("#75A4FF");
  const [loading, setLoading] = useState(true);
  function details() {
    const username = document.getElementById("username");
    if (auth.currentUser) {
      username.innerText = auth.currentUser.email;
    }
  }
  function load() {
    window.addEventListener("DOMContentLoaded", (e) => {
        setLoading(false);
      });
  }
  useEffect(() => {
    load();
    setTimeout(() => {
      details();
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>CY-BOCK | Home</title>
        <meta name="description" content="Criminal Data Analyist" />
        <link rel="icon" href="/ficon.ico" />
      </Head>
      {loading ? (
        <>
          <img className={styles.vector} src='/Vector/Vector.png'/>
          <img className={styles.vector2} src='/Vector/Vectorinverted.png'/>
          <div className={styles.NavBar}>
            <img src="https://i.ibb.co/xCXrwbW/CY-Bock.png" />
            <div className={styles.options}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="./AboutScreen">
                <a>About Us</a>
              </Link>
              <a
                id="username"
                onClick={(e) => {
                  auth.signOut;
                  window.open("/", "_self");
                }}
                title="Logout"
                onMouseEnter={(e) => {
                  setbgCol("red");
                }}
                onMouseLeave={(e) => {
                  setbgCol("#75A4FF");
                }}
                style={{
                  color: "white",
                  backgroundColor: bgCol,
                  padding: "10px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  transition: "0.7s",
                }}
              ></a>
            </div>
          </div>
          <center>
            <div className={styles.body}>
              <div
                className={styles.box}
                onClick={(e) => {
                  window.open("./CreateScreen", "_self");
                }}
              >
                <img src="https://i.ibb.co/Z1SGTcZ/Vector.png" />
                <h1>Create New Record</h1>
              </div>
              <div
                className={styles.box}
                onClick={(e) => {
                  window.open("./FindScreen", "_self");
                }}
              >
                <img src="https://i.ibb.co/jrn41HP/Group-2-1.png" />
                <h1>Find A Record</h1>
              </div>
              <div
                className={styles.box}
                onClick={(e) => {
                  window.open("./Overall", "_self");
                }}
              >
                <img src="https://i.ibb.co/dg1TQDH/Vector-1.png" />
                <h1>Overall Analysis</h1>
              </div>
            </div>
          </center>
        </>
      ) : (
        <div className={styles.loading}>
          <h1>Loading....</h1>
        </div>
      )}
    </>
  );
}
