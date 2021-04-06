import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const haversine = require("haversine");
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faUtensils,
  faCity,
  faTheaterMasks,
  faCompass,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const cerca1 = {
  latitute: -22.8138898979856,
  longitude: -43.37738698539801,
  link: "https://geofencebrasil.com.br/pelourinho",
  nome: "Pelourinho",
  raio: 10000,
};
const cerca2 = {
  latitute: -22.8138898979856,
  longitude: -43.37738698539801,
  link: "https://geofencebrasil.com.br/jorgeamado/",
  nome: "Jorge Amado",
  raio: 1000,
};
const listaCercas = [cerca1, cerca2];
const cercasEncontradas = [];
export default function Home() {
  const [cercas, setCercas] = useState([]);

  useEffect(() => {
    let todosEncontrados = true;
    listaCercas.forEach((cerca) => {
      if (!(cerca in cercas)) todosEncontrados = false;
    });
    if (!todosEncontrados) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function success(position) {
            const end = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            listaCercas.forEach((cerca) => {
              console.log("Avaliando Cerca ", cerca.nome);
              let start = {
                latitude: cerca.latitute,
                longitude: cerca.longitude,
              };
              if (!(cerca in cercasEncontradas)) {
                if (haversine(start, end) < cerca.raio) {
                  cercasEncontradas.push(cerca);
                }
              }
            });
          setCercas(cercasEncontradas);
          },
          function error(error_message) {
            // Erro com a geolocalizacao
            console.error(
              "An error has occured while retrievinglocation",
              error_message
            );
          }
        );
      } else {
        // geolocalizacao nao suportada
        // Pegar localizacao de alguma forma
        console.log("geolocation is not enabled on this browser");
      }
    }
  });
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
              <Image src="/logo.png" alt="Salvador" width={500} height={500} />
            </div>
            <p className={styles.description}>Turismo 4.0</p>
          </div>
          <div className={styles.grid}>
            <Link
              href="https://geofencebrasil.com.br/pelourinho/lojas/"
              passHref={true}
            >
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Conheça lojas da cidade &nbsp;
                  <FontAwesomeIcon icon={faCity} size="xs" />
                </h3>
                <p>Descubra a cidade de Salvador!</p>
              </a>
            </Link>
            <Link
              href="https://geofencebrasil.com.br/pelourinho/restaurantes/"
              passHref={true}
            >
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

            <Link
              href="https://geofencebrasil.com.br/pelourinho/arte/"
              passHref={true}
            >
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Arte e cultura &nbsp;
                  <FontAwesomeIcon icon={faTheaterMasks} size="xs" />
                </h3>
                <p>Desvende a cultura de Salvador!</p>
              </a>
            </Link>

            <Link
              href="https://geofencebrasil.com.br/pelourinho/servicos/"
              passHref={true}
            >
              <a
                style={{ background: "rgb(255,255,255)" }}
                className={styles.card}
              >
                <h3>
                  Serviços &nbsp;
                  <FontAwesomeIcon icon={faCompass} size="xs" />
                </h3>
                <p>Os melhores prestadores de serviço da região!</p>
              </a>
            </Link>
          </div>
          <div
            style={{
              padding: 30,
              borderRadius: 10,
              background: "rgb(255,255,255)",
            }}
          >
            <h1 className={styles.title}>Cerca Geográfica</h1>
            <p className={styles.description}>
              Procurando cercas geográficas em sua posição
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/scan.gif"
                alt="Escaneando"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.grid}></div>
          <div
            style={{ background: "rgb(255,255,255)" }}
            className={styles.card}
          >
            <h3>
              Cercas encontradas &nbsp;
              <FontAwesomeIcon icon={faGlobe} size="xs" />
            </h3>
            {cercas.length <= 0 && (
              <div>
                <a style={{ background: "rgb(200,200,200)" }}>
                  <h4>Nenhuma cerca encontrada!</h4>
                </a>
              </div>
            )}
          </div>
          <div className={styles.grid}>
            {cercas.length > 0 && (
              <div>
                {cercas.map((cerca) => (
                  <Link href={cerca.link} passHref={true}>
                    <div
                      style={{ background: "rgb(255,255,255)" }}
                      className={styles.card}
                    >
                      <h2>
                        {cerca.nome}{" "}
                        <FontAwesomeIcon icon={faCompass} size="xs" />
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <a>Este WebApp é apenas para fins demonstrativos.</a>
      </footer>
    </div>
  );
}
