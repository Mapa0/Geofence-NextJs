import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" href="/">
        <a className="texto-branco">
          Home
        </a>
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/hoteis">
      <a className="texto-branco">
          Hoteis
        </a>
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/eventos">
      <a className="texto-branco">
          Eventos
        </a>
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/pontos-turisticos">
      <a className="texto-branco">
          Pontos turísticos
        </a>
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/servicos">
      <a className="texto-branco">
          Serviços
        </a>
      </Link>
    </Menu>
  );
};
