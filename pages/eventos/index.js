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
        <div className="evento">
          <div id="head">
            <a href="/">
              <img src="/html/img/salvador.png" width="170" height="67" />
            </a>
          </div>
          <div id="container">
            <div className="eventos">EVENTOS</div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/olodum.jpg" width="126" height="93" />
              </div>
              <div className="texto-eventos">
                {" "}
                <span className="titulo-evento">Show do Olodum</span>
                <br />
                $$ - R$ 50,00
                <br />A banda mais famosa da Bahia em show único no Pelourinho.
                Venha participar. Dia 05 de Março às 19h - Largo do Pelourinho
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/capoeira.jpg" width="126" height="93" />
              </div>
              <div className="texto-eventos">
                {" "}
                <span className="titulo-evento">Apresentação de Capoeira</span>
                <br />
                ENTRADA FRANCA
                <br />A já tradicional apresentação de Capoeira no Mercado
                Modelo. Venha conferir uma autêntica roda de capoeira.
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img
                  src="/html/img/ivete-sangalo.jpg"
                  width="126"
                  height="93"
                />
              </div>
              <div className="texto-eventos">
                {" "}
                <span className="titulo-evento">Show da Ivete Sangalo</span>
                <br />
                $$ - R$ 80,00
                <br />A cantora baiana
                <span className="link">
                  <a href="#openModal"> apresenta</a>
                </span>{" "}
                os seus maiores sucessos em um dos locais mais belos de
                Salvador, o Farol da Barra.
              </div>
            </div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/gastronomia.jpg" width="126" height="93" />
              </div>
              <div className="texto-eventos">
                {" "}
                <span className="titulo-evento">
                  Evento Gastronômico no Pelô
                </span>
                <br />
                $$s - R$ 50,00
                <br />
                Venha saborear a tradicional comida baiana regado a muito dendê
                e aché. Dia 10 de Março, a partir das 10h. Pelourinho
              </div>
            </div>
            <div class="publicidade">
              {" "}
              <a href="#">
                <img src="/html/img/publicidade.jpg" width="480" height="57" />
              </a>{" "}
            </div>
          </div>
          <div id="openModal" class="modalDialog">
            <div>
              <a href="#close" title="Close" class="close">
                X
              </a>
              <h2>SHOW</h2>
              <iframe
                width="260"
                height="250"
                src="https://www.youtube.com/embed/KTh5YPqZs2E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
