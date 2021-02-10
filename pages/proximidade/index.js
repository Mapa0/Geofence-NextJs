import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faHome,
  faQrcode,
  faGlobe,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <div className={styles.fundo}>
        <Head>
          <title>Proximidade</title>
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
            <h1 className={styles.title}>Proximidade</h1>
            <p className={styles.description}>Selecione uma opção:</p>
          </div>
          <div className={styles.grid}>
            <Link href="/">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Voltar &nbsp;
                  <FontAwesomeIcon icon={faHome} size="xs" />
                </h3>
                <p>Retornar ao menu principal</p>
              </a>
            </Link>

            <a
              style={{ background: "rgb(255,255,255)" }}
              className={styles.card}
            >
              <h3>
                Ler código-QR &nbsp;
                <FontAwesomeIcon icon={faQrcode} size="xs" />
              </h3>
              <p>Escaneie códigos-QR para aprender mais!</p>
            </a>

            <Link href="/proximidade/geofence">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Cerca Geográfica &nbsp;
                  <FontAwesomeIcon icon={faGlobe} size="xs" />
                </h3>
                <p>Obtenha informações ao se posicionar na área delimitada!</p>
              </a>
            </Link>

            <Link href="/proximidade">
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Ler Beacons Próximos &nbsp;
                  <FontAwesomeIcon icon={faBinoculars} size="xs" />
                </h3>
                <p>Escaneie Beacons próximos para obter mais informações!</p>
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
