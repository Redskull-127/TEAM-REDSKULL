import styles from "../../styles/HomeScreen.module.css";
import { auth } from "../../firebase/FirebaseConfig";
import React, { useState, useEffect } from "react";

export default function HomeScreen() {
    const [bgCol, setbgCol] = useState("#75A4FF");
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
                    <a >Home</a>
                    <a >About Us</a>
                    <a
                        id="username"
                        onClick={(e) => {
                            auth.signOut;
                            window.open("/", "_self");
                        }}
                        title="Logout"
                        onMouseEnter={(e) => {setbgCol("red")}}
                        onMouseLeave={(e) => {setbgCol("#75A4FF")}}
                        style={{
                            color: "white",
                            backgroundColor: bgCol,
                            padding: "10px",
                            borderRadius: "14px",
                            cursor: "pointer",
                            transition: "0.7s"
                        }}
                    ></a>
                </div>
            </div>
            <center>
            <div className={styles.body}>
                <div className={styles.box} onClick={(e) => {window.open('./CreateScreen', '_self')}}>
                    <img src="https://i.ibb.co/Z1SGTcZ/Vector.png"/>
                    <h1>Create New Record</h1>
                </div>
                <div className={styles.box} onClick={(e) => {window.open('./FindScreen', '_self')}}>
                    <img src="https://i.ibb.co/jrn41HP/Group-2-1.png"/>
                    <h1>Find A Record</h1>
                </div>
                <div className={styles.box} onClick={(e) => {window.open('./Overall', '_self')}}>
                    <img src='https://i.ibb.co/dg1TQDH/Vector-1.png'/>
                    <h1>Overall Analysis</h1>
                </div>
            </div>
            </center>
        </>
    );
}
