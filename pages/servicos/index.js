import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SideBar from "../sidebar";
import "@fortawesome/fontawesome-svg-core/styles.css";
export default function Home() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div className="servico">
          <div id="head">
            <a href="/">
              <img src="/html/img/salvador.png" width="170" height="67" />
            </a>
          </div>
          <div id="container">
            <div className="hoteis">SERVIÇOS</div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/clinica.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">
                  Clínicas e Hospitais Particulares
                </span>
                <br />
                Confira a lista de clínicas e hospitais conveniados e quais
                planos de saúde são aceitos nesses estabelecimentos.{" "}
                <span className="link-servico">
                  <a href="#openModal">Clique aqui.</a>
                </span>
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/guarda.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">Guarda Municipal</span>
                <br />
                Entre em contato direto com a a Guarda Municipal no 196 ou
                confira o posto mais próximo.{" "}
                <span className="link-servico">
                  <a href="#openModal">Clique aqui.</a>
                </span>
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/hospital.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">Hospitais Públicos</span>
                <br />
                Confira a lista de hospitas e emergências da Cidade de Salvador.{" "}
                <span className="link-servico">
                  <a href="#openModal">Clique no mapa</a>
                </span>{" "}
                para ver a localização do mais próximo.
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/transporte.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">Transporte</span>
                <br />
                Confira a localização de Metrô, Taxi e barcas na nossa cidade.
                Veja no{" "}
                <span className="link-servico">
                  <a href="#openModal">nosso mapa</a>
                </span>{" "}
                os pontos mais próximos.
              </div>
            </div>
          </div>
          <div className="publicidade">
            {" "}
            <a href="/">
              <img src="/html/img/sul.jpg" width="480" height="57" />
            </a>{" "}
          </div>
          <div id="openModal" class="modalDialog">
            <div>
              <a href="#close" title="Close" class="close">
                X
              </a>
              <h2>MAPA</h2>
              <img src="/html/img/mapa.jpg" width="263" height="260" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
