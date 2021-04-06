import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" href="/">
        Home
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/hoteis">
        Hotéis
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/eventos">
        Eventos
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/pontos-turisticos">
        Pontos Turísticos
      </Link>
      <br />
      <br />

      <Link className="menu-item" href="/servicos">
        Serviços
      </Link>
    </Menu>
  );
};
