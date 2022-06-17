// import styles from '../styles/404.module.css'
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function error404() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>CY-BOCK | 404</title>
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
      </Head>
      <center>
        <img src="/Assets/CY-Bock.png" style={{ marginTop: "240px" }} />
        <div style={{ margin: "50px" }}>
          <h1>404 : An unknown error occured!</h1>
        </div>
        <Link href='/'>
        <a className="btn btn-primary">Homepage</a>
        </Link>
      </center>
    </>
  );
}
