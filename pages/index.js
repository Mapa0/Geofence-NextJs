import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import style from "../styles/Home.module.css";
import Head from "next/head";
import SideBar from "./sidebar";
const haversine = require("haversine");
import "@fortawesome/fontawesome-svg-core/styles.css";
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
    <div id="App">
      <Head>
        <title>Salvador</title>
      </Head>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div id="topo">
          <img src="/html/img/destaque.jpg" width="480" height="373" />{" "}
        </div>
        <div id="botoes">
          <div className="flex-container">
            <Link className="caixa" href="/hoteis">
              <img src="/html/img/hoteis-bt.jpg" />
            </Link>
            <a className="caixa" href="/eventos">
              <img src="/html/img/eventos-bt.jpg" />
            </a>
          </div>
          <div className="flex-container">
            <div>
              <a className="caixa" href="/pontos-turisticos">
                <img src="/html/img/pontos-turisticos-bt.jpg" />
              </a>
            </div>
            <div>
              <a className="caixa" href="/servicos">
                <img src="/html/img/servicos-bt.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="search">
          <div className="chamada1">
            <img src="/html/img/search-cerca.jpg" width="480" height="97" />
            <div className="chamada">
              <img src="/html/img/radar.jpg" width="59" height="60" />
              <br />
            </div>
            <div className="texto-cerca">CERCAS ENCONTRADAS</div>
            <div className="encontradas">
              {cercas.length > 0 && (
                <div>
                  {cercas.map((cerca) => (
                    <Link href={cerca.link} passHref={true}>
                      <div>
                        {cerca.nome === "Pelourinho" && (
                          <div className="cerca">
                            <a href="#">
                              <img
                                src="/html/img/cerca-pelourunho.jpg"
                                width="266"
                                height="89"
                              />
                            </a>
                          </div>
                        )}
                        {cerca.nome === "Jorge Amado" && (
                          <div className="cerca">
                            <a href="#">
                              <img
                                src="/html/img/cerca-jorge-amado.jpg"
                                width="266"
                                height="89"
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="assinatura">
              Aplicativo para fins demonstrativos - © Geofence Brasil
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
