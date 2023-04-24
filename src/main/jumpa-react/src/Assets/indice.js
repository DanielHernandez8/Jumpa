import './indice.css';
import Card from './Tarjeta.js';

window.addEventListener('scroll', function() {
  var listaLateral = document.querySelector('.sidebar');
  if (window.pageYOffset <= 800) {
    listaLateral.classList.add('sidebar--oculto');
  } else {
    listaLateral.classList.remove('sidebar--oculto');
  }
});

function Indice(){
    const rutaImagen = process.env.PUBLIC_URL + '/img/samuel.jpg';
    const rutaImagen2 = process.env.PUBLIC_URL + '/img/ball.png';
    
return (
  <>
    <div className="wrapper">
      <div className="container">
      <div className="sidebar">
          <ul>
            <li>
              <a href="#Card1">Origen</a>
            </li>
            <li>
              <a href="#Card2">Objetivo</a>
            </li>
            <li>
              <a href="#Card3">Juego</a>
            </li>
            <li>
              <a href="#Card4">Futuro</a>
            </li>
            <li>
              <a href="#Card5">Gracias</a>
            </li>
          </ul>
        </div>
        <div className="content">
            <div id = "Card1">
                <Card
                    titleFront="¿Como surgió JUMPA?"
                    imagenBack={rutaImagen}
                    titleBack="El origen"
                    textBack="Jumpa nace apartir de un gusto en comun, los videojuegos.<br>
                    Mediante los videojuegos nos propusimos crear un videojuego que sea divertido
                    y a la vez educativo.<br> Con esta herramienta podemos hacer que los niños aprendan
                    buenas costumbres hacía el medio ambiente."
                    imagenfront={rutaImagen2}
                />
            </div>
            <div id = "Card2"></div>
                <Card
                    titleFront="¿Cuál es nuestro objetivo?"
                    imagenBack={rutaImagen}
                    titleBack="Concienciar"
                    textBack="Con este proyecto, queremos hacer más divertida y amena la coincienciación
                    por el medio ambiente.<br><br> 
                    ¿Como logramos esto? Mediante minijuegos en los cuales tendrás que pensar rápidamente
                    que tienes que hace para ganar más puntos.
                    "
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card3"></div>
                <Card
                    titleFront="Sin más dilación el plato principal"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card4"></div>
                <Card
                    titleFront="¿El futuro?"
                    imagenBack={rutaImagen}
                    titleBack="En el tintero"
                    textBack="Que ideas nos gustaría añadir en un futuro?<br><br>
                    Por supuesto más minijuegos (aquí tenemos que añadir minijuegos).<br><br>
                    Adaptar el juego para que se pueda disfrutar desde el móvil.<br><br>
                    Cambiar todo el diseño a pixelart.
                    "
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card5"></div>
                <Card
                    titleFront="Agradecimientos"
                    imagenBack={rutaImagen}
                    titleBack="El inicio"
                    textBack="Todo esto ha sido posible gracias a la oportunidad
                    que nos ha brindado la Fundación Esplai junto al SOC.<br><br>
                    En especial a David, Lydia y Araceli, que nos han estado 
                    apoyando durante estos 3 meses de trabajo.<br><br>
                    Esperamos que esto sea el comiendo de algo grande y de lo que 
                    podamos estar orgullosos.
                    "
                    imagenfront={rutaImagen2}
                />
            <div/>
        </div>
      </div>
    </div>
  </>
);
}

export default Indice;