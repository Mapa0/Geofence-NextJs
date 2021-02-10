import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faUtensils,
  faCity,
  faTheaterMasks,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <div className={styles.fundo}>
        <Head>
          <title>Projeto Salvador</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div
            style={{
              padding: 30,
              borderRadius: 10,
              background: "rgb(255,255,255)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/logo.png"
                alt="Salvador"
                width={500}
                height={500}
              />
            </div>
            <p className={styles.description}>Turismo 4.0</p>
          </div>
          <div className={styles.grid}>
            <Link href="/">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Conheça a cidade &nbsp;
                  <FontAwesomeIcon icon={faCity} size="xs" />
                </h3>
                <p>Descubra a cidade de Salvador!</p>
              </a>
            </Link>
            <Link href="/">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Conheça a gastronomia &nbsp;
                  <FontAwesomeIcon icon={faUtensils} size="xs" />
                </h3>
                <p>Desbrave as delícias de Salvador!</p>
              </a>
            </Link>

            <Link href="/">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Conheça a cultura &nbsp;
                  <FontAwesomeIcon icon={faTheaterMasks} size="xs" />
                </h3>
                <p>Desvende a cultura de Salvador!</p>
              </a>
            </Link>

            <Link href="/proximidade">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Proximidade &nbsp;
                  <FontAwesomeIcon icon={faCompass} size="xs" />
                </h3>
                <p>QRcodes, Geofences & Beacons</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <a>Este WebApp é apenas para fins demonstrativos.</a>
      </footer>
    </div>
  );
}
