import styles from "../../styles/AboutScreen.module.css";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function AboutScreen() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>CY-BOCK | About</title>
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
      <h1
            className={`bi bi-arrow-left ${styles.bi}`}
            onClick={(e) => {
              window.open("./HomeScreen", "_self");
            }}
          ></h1>
      <div className={styles.head}><h1>Meet our Developers</h1></div>
      <div className={styles.cards}>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Meer Tarbani</h5>
            <p className="card-text">
              Work : Lead, Coding and Hosting
            </p>
            <Link href='https://redskull.me' target='_blank'>
            <a className="btn btn-primary">
              Portfolio
            </a>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Vikas Assudani</h5>
            <p className="card-text">
              work : Ui/Ux designer
            </p>
            <Link href='https://vikas.redskull.me' target='_blank'>
            <a className="btn btn-primary">
              Portfolio
            </a>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Chirag Pariyani</h5>
            <p className="card-text">
                work : Ideas
            </p>
            <Link href='https://chirag.redskull.me' target='_blank'>
            <a className="btn btn-primary">
              Portfolio
            </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
