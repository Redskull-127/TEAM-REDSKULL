import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Script from "next/script";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
export default function Home() {
  initializeApp({
    apiKey: "AIzaSyCh8nd7w9QbWD9z-BL5-Z3-kV_HoNgR--E",
    authDomain: "team-redskull.firebaseapp.com",
    projectId: "team-redskull",
    storageBucket: "team-redskull.appspot.com",
    messagingSenderId: "727979282334",
    appId: "1:727979282334:web:1e2bbfed7c0a44b269d08f",
    measurementId: "G-C4T38F9X70",
  });
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages : "en,hi", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element');

}
  return (
    <>
    <center>
    <div id="google_translate_element" style={{position: 'absolute'}}> </div>
    </center>
      <Header />
      <div className={styles.container}>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></Script>
        <Head>
          <title>CY-BOCK</title>
          <meta name="description" content="Criminal Data Analyist" />
          <link rel="icon" href="/ficon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
          />
          {/* font-family: 'Oswald', sans-serif; */}
        </Head>
      </div>
    </>
  );
}
