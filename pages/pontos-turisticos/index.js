import React, { useEffect } from "react";
import SideBar from "../sidebar";
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
            <div className="hoteis">PONTOS TURÍSTICOS</div>
            <div className="box">
              <div className="foto">
                <img src="/html/img/mercado-modelo.jpg" width="126" height="93" />
              </div>
              <div className="texto">
                {" "}
                <span className="titulo">Mercado Modelo</span>
                <br />
                $$ - R$ 50,00
                <br />
                O Mercado Modelo é um mercado de artesanato localizado na cidade de Salvador, estado da Bahia, no Brasil. Foi inaugurado em 2 de fevereiro de 1912, e ocupa, desde 1971. Saiba Mais.
              </div>
            </div>
            <div class="box">
              <div class="foto">
                <img src="/html/img/elevador-lacerda.jpg" width="126" height="93" />
              </div>
              <div class="texto">
                {" "}
                <span class="titulo">Elevador Lacerda</span>
                <br />
                $ - R$ 5,00
                <br />
                O Elevador Lacerda é um sistema de transporte público.Trata-se do primeiro elevador urbano do mundo. Faz o transporte de pessoas entre a Praça Cairu, na Cidade Baixa, e a Praça Tomé de Sousa, na Cidade Alta. Saiba Mais.
              </div>
            </div>
            <div class="box">
              <div class="foto">
                <img src="/html/img/pelourinho.jpg" width="126" height="93" />
              </div>
              <div class="texto">
                {" "}
                <span class="titulo">Pelourinho</span>
                <br />
                ENTRADA FRANCA
                <br />
                O Pelourinho é um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de Jesus até o Largo do Pelourinho. Saiba Mais.
              </div>
            </div>
            <div class="box">
              <div class="foto">
                <img src="/html/img/farol-barra.jpg" width="126" height="93" />
              </div>
              <div class="texto">
                {" "}
                <span class="titulo">Farol da Barra</span>
                <br />
                ENTRADA FRANCA
                <br />
                O Farol da Barra, ou Farol de Santo Antônio, foi o segundo existente em todo o continente americano, antecedido somente pelo farol do antigo Palácio de Friburgo, no Recife. Saiba Mais.
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
