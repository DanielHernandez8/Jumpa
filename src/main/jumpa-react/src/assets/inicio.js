import "./inicio.css";

function Inicio() {
  const imgDani = process.env.PUBLIC_URL + "/img/avatar_dani.png";
  const imgPau = process.env.PUBLIC_URL + "/img/avatar_pau.png";
  const imgRicky = process.env.PUBLIC_URL + "/img/avatar_ricky.png";
  const imgJenny = process.env.PUBLIC_URL + "/img/avatar_jenny.png";
  
  return (
    <>
      
      <div class="grid-container" id="nosotros">
        {/* Dani */}
        <section id="messagelist1" class="message-list">
          <div class="nes-balloon from-left">
            <p>Hola! Mi nombre es Daniel Hernandez y me he encargado de la parte Front-end</p>
          </div>
        </section>
        <img className="imagen1" src={imgDani} />

        {/* Pau */}

        <section id="messagelist2" class="message-list">
          <div class="nes-balloon from-right">
            <p>Hola! Mi nombre es Pau Espinas y me he encargado de la parte Front-end</p>
          </div>
        </section>
        <img className="imagen2" src={imgPau} />

        {/* Ricardo */}
        <section id="messagelist3" class="message-list">
          <div class="nes-balloon from-left">
            <p>Hola! Mi nombre es Ricardo Castro y me he encargado de la parte Back-end</p>
          </div>
        </section>
        <img className="imagen3" src={imgRicky} />

        {/* Jenny */}

        <section id="messagelist4" class="message-list">
          <div class="nes-balloon from-right">
            <p>Hola! Mi nombre es Jennifer Rodriguez y me he encargado de la parte Back-end</p>
          </div>
        </section>
        <img className="imagen4" src={imgJenny} />
      </div>
    </>
  );
}
export default Inicio;
