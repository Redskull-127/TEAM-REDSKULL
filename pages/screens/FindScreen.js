import styles from "../../styles/Find.module.css";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/FirebaseFirestore";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Head from "next/head";
import Script from "next/script";


export default function FindScreen() {
  const [qdocs, setQDocs] = useState(" ");
  const [docs, setDocs] = useState([]);

  const q = query(collection(firestore, "Data"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
      setDocs(cities);
    });
    // console.log("Current cities in CA: ", cities.join(", "));
  });

  useEffect(() => {
    setTimeout(() => {
      unsubscribe();
    }, 2000);
  }, []);
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>CY-BOCK</title>
        <meta name="description" content="Criminal Data Analyist" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
      </Head>
      <h1 className={`bi bi-arrow-left ${styles.bi}`} onClick={(e) => {window.open('./HomeScreen', '_self')}}></h1>
      <div className={styles.Heading}>
        <h1>All listed Criminal</h1>
      </div>
      <div className={styles.Container}>
        <div className={styles.heads}>
          <h3 style={{width: "15%"}}>Name</h3>
          <h3 style={{width: "5%"}}>Age</h3>
          <h3 style={{width: "20%"}}>Crime</h3>
        </div>
        {docs && docs.map((doc, key) => {
          return(
            <div className={styles.Card}>
              <div className={styles.CardBody1}>
                <h4>{doc.name}</h4>
              </div>
              <div className={styles.CardBody2}>
                <h4>{doc.age}</h4>
              </div>
              <div className={styles.CardBody3}>
                <h4>{doc.crime}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </>
    // <>
    //   {docs &&
    //     docs.map((Data, key) => {
    //       console.log(Data);
    //       return (
    //         <div className="blog-container" key={key}>
    //           <h4>{Data}</h4>
    //         </div>
    //       );
    //     })}
    // </>
  );
}
