import styles from "../../styles/HomeScreen.module.css";
import { auth } from "../../firebase/FirebaseConfig";
import React, { useState, useEffect } from "react";

export default function HomeScreen() {
    function details() {
        const username = document.getElementById("username");
        if (auth.currentUser) {
            username.innerText = auth.currentUser.email;
        }
    }
    useEffect(() => {
        setTimeout(() => {
            details();
        }, 2000);
    }, []);
    return (
        <>
            <div className={styles.NavBar}>
                <img src="https://i.ibb.co/xCXrwbW/CY-Bock.png" />
                <div className={styles.options}>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a
                        id="username"
                        onClick={(e) => {
                            auth.signOut;
                            window.open("/", "_self");
                        }}
                        style={{
                            color: "white",
                            backgroundColor: "#75A4FF",
                            padding: "10px",
                            borderRadius: "14px",
                            cursor: "pointer",
                        }}
                    ></a>
                </div>
            </div>
            <center>
            <div className={styles.body}>
                <div className={styles.box}>
                    <img src="https://i.ibb.co/Z1SGTcZ/Vector.png"/>
                    <h1>Create New Record</h1>
                </div>
                <div className={styles.box}>
                    <img src="https://i.ibb.co/jrn41HP/Group-2-1.png"/>
                    <h1>Find A Record</h1>
                </div>
                <div className={styles.box}>
                    <img src='https://i.ibb.co/dg1TQDH/Vector-1.png'/>
                    <h1>Overall Analysis</h1>
                </div>
            </div>
            </center>
        </>
    );
}
