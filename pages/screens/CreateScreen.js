import styles from "../../styles/Create.module.css";
import Head from "next/head";
import Script from "next/script";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/FirebaseFirestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
export default function CreateScreen() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [crime, setCrime] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [dateofCrime, setdateofCrime] = useState(new Date());
  const [dateofCaught, setdateofCaught] = useState(new Date());
  const [location, setLocation] = useState("");
  const [caughtlocation, setCaughtlocation] = useState("");
  const [otherData, setOtherData] = useState("");
  const [precases, setPrecases] = useState(0);
  const [docs, setDocs] = useState(" ");
  function sendData() {
    try {
      const docRef = addDoc(collection(firestore, "Data"), {
        name: name,
        crime: crime,
        age: age,
        gender: gender,
        dateofcrime: dateofCrime,
        dateofcaught: dateofCaught,
        location: location,
        locationcaught: caughtlocation,
        otherdata: otherData,
        totalcases: precases + 1,
        document: docs,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setSuccess(true);
  }

  return (
    <>
    {success ? <div className="alert alert-success">Successfully added</div> : null}
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
      <center>
        <div className={styles.header}>
          <h1
            className="bi bi-arrow-left"
            onClick={(e) => {
              window.open("./HomeScreen", "_self");
            }}
          ></h1>
          <h2>Create New Record</h2>
        </div>
        <div className={styles.body}>
          <div className="mb-3">
            <label htmlFor="cname" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="cname" onChange={(e) => setName(e.currentTarget.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="ccrime" className="form-label">
              Crime
            </label>
            <input type="text" className="form-control" id="ccrime" onChange={(e) => setCrime(e.currentTarget.value)}/>
          </div>

          <div className={styles.combain}>
            <div className="mb-3">
              <label htmlFor="cage" className="form-label">
                Age
              </label>
              <input type="text" className="form-control" id="cage" onChange={(e) => setAge(e.currentTarget.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="cgender" className="form-label">
                Gender
              </label>
              <input type="text" className="form-control" id="cgender" onChange={(e) => setGender(e.currentTarget.value)}/>
            </div>
          </div>

          <p style={{ marginTop: "30px" }}>DATE</p>
          <div className={styles.combain}>
            <DatePicker
              selected={dateofCrime}
              dateFormatCalendar="MMMM"
              onChange={(date) => setdateofCrime(date)}
            />

            <DatePicker
              selected={dateofCaught}
              onChange={(date) => setdateofCaught(date)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cloc" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="cloc"
              onChange={(e) => setLocation(e.currentTarget.value)}
              style={{ width: "500px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cloccaught" className="form-label">
              Location where caught
            </label>
            <input
              type="text"
              className="form-control"
              id="cloccaught"
              onChange={(e) => setCaughtlocation(e.currentTarget.value)}
              style={{ width: "500px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cprecase" className="form-label">
              Total Previous Cases
            </label>
            <input
              type="text"
              className="form-control"
              id="cprecase"
              onChange={(e) => setPrecases(e.currentTarget.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cdetails" className="form-label">
              Any other data of crime/criminal
            </label>
            <input
              type="text"
              className="form-control"
              id="cdetails"
              onChange={(e) => setOtherData(e.currentTarget.value)}
              style={{ width: "500px" }}
            />
          </div>
          <div>
            <p>Photo/Video of criminal</p>
            <button type="button" className="btn btn-primary" onClick={()=>sendData()}>
              Upload
            </button>
          </div>
        </div>
      </center>
      
    </>
  );
}
