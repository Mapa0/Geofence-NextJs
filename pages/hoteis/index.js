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
        <div className="hotel">
          <div id="head">
            <a href="/">
              <img src="/html/img/salvador.png" width="170" height="67" />
            </a>
          </div>
          <div id="container">
            <div className="hoteis">HOTÉIS</div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/faro.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">Faro Inn Hotel Salvador</span>
                <br />
                4.3 - <img src="/html/img/star.png" width="73" height="15" />
                (170) avaliações
                <br />
                Convenientemente situado no bairro de Amaralina, em Salvador, o
                Rede Andrade Riviera Premium está localizado a 2,7 km da Praia
                Pituba, a 5 km do Shopping Iguatemi e a 6 km da Estação
                Rodoviária.
              </div>
            </div>
            <div class="box">
              <div class="foto">
                <img src="/html/img/gale.jpg" width="126" height="93" />
              </div>
              <div class="texto">
                {" "}
                <span class="titulo">Vila Galé Salvador</span>
                <br />
                4.3 - <img src="/html/img/star.png" width="73" height="15" />
                (170) avaliações
                <br />
                Situado bem em frente à Praia da Barra, o hotel 4 estrelas Rede
                Andrade Barra tem uma localização central e oferece vista do mar
                da Baía de Todos os Santos, no bairro da Barra, em Salvador...
              </div>
            </div>
            <div class="box">
              <div class="foto">
                <img src="/html/img/barra.jpg" width="126" height="93" />
              </div>
              <div class="texto">
                {" "}
                <span class="titulo">Rede Andrade Barra</span>
                <br />
                4.3 - <img src="/html/img/star.png" width="73" height="15" />
                (170) avaliações
                <br />
                Situado em Salvador, bem ao lado do bairro do Rio Vermelho, o
                Salvador Express Praia Hotel dispõe de um terraço ao ar livre
                com banheira de hidromassagem e vista do mar.beach and few bars
                around...
              </div>
            </div>
            <div class="publicidade">
              {" "}
              <a href="/">
                <img src="/html/img/publicidade.jpg" width="480" height="57" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
