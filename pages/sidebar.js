import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/hoteis.jpg">
        Hotéis
      </a>

      <a className="menu-item" href="/eventos.jpg">
        Eventos
      </a>

      <a className="menu-item" href="/pontos-turisticos.jpg">
        Pontos Turísticos
      </a>

      <a className="menu-item" href="/servicos.jpg">
        Serviços
      </a>
    </Menu>
  );
};
