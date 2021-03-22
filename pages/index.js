import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideBar from "./sidebar";
const haversine = require("haversine");
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faUtensils,
  faCity,
  faTheaterMasks,
  faCompass,
  faGlobe,
  faMapMarkerAlt,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

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
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div>
          <Image
            src="/fundo.png"
            width={480}
            height={369}
            layout="responsive"
          ></Image>
        </div>
        <div class="hoteis">
          <Link href="/hoteis.jpg">
            <Image
              src="/hoteis.png"
              width={241}
              height={141}
              layout="responsive"
            ></Image>
          </Link>
        </div>
        <div class="eventos.jpg">
          <Link href="/">
            <Image
              src="/eventos.png"
              width={241}
              height={141}
              layout="responsive"
            ></Image>
          </Link>
          <div class="pt">
            <Link href="/pontos-turisticos.jpg">
              <Image
                src="/pontosturisticos.png"
                width={241}
                height={141}
                layout="responsive"
              ></Image>
            </Link>
          </div>
          <div class="servicos">
            <Link href="/servicos.jpg">
              <Image
                src="/servicos.png"
                width={241}
                height={141}
                layout="responsive"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ background: "rgb(255,255,255)" }} className={styles.card}>
        <h3>
          Buscando cercas geográficas &nbsp;
          <Spinner animation="grow" variant="dark" size="md" />
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
                    {cerca.nome} <FontAwesomeIcon icon={faMapMarkedAlt} size="xs" />
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <footer>
        <div class="fundo">
          <h6 class="fundo">Aplicativo para fins demonstrativos - © Geofence Brasil</h6>
        </div>
      </footer>
    </div>
  );
}
