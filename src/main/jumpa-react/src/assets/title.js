import "./title.css";
import { useState, useEffect, useRef } from "react";

const imgMenu = process.env.PUBLIC_URL + "/img/bx-menu.svg";
function Title() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleBlur = () => {
    setMenu(false);
  };
  const handleMouseLeave = () => {
    setMenu(false);
  };
    return (
<header class="header" id="ini" className="nes-pointer">
  <img src={imgMenu} alt="" className={`menu ${menu ? "clicked" : ""}`} onClick={handleClick}/>
  <nav className={`menu-navegacion ${menu ? 'menu-navegacion-active' : ''}`} onBlur={handleBlur}  onMouseLeave={handleMouseLeave} tabIndex="0">
      <a href="#ini">Inicio</a>
      <a href="#servicio">Servicio</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#diapositivas">Diapositivas</a>
      <a href="#contacto">Redes</a>
  </nav>
  <div class="contenedor-head">
    <h1 class="titulo">JUMPA</h1>
    <p class="copy">Aprende Jugando</p>
  </div>
</header>

    )
};
export default Title;
