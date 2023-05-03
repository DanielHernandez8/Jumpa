import "./nosotros.css";
const imgDani = process.env.PUBLIC_URL + "/img/avatar_dani.png";
const imgPau = process.env.PUBLIC_URL + "/img/avatar_pau.png";
const imgJenny = process.env.PUBLIC_URL + "/img/avatar_jenny.png";
const imgRicky = process.env.PUBLIC_URL + "/img/avatar_ricky.png";
function Nosotros() {
return (
    <>
      <section class="contenedor" id="nosotros">
    <h2 class="subtitulo">Hola</h2>
    <section class="pixel">
        <div class="pixel-content">
            <img src={imgDani} alt=""/>
            <h3 class="n-expert">Dani</h3>
        </div>
        <div class="pixel-content">
            <img src={imgPau} alt=""/>
            <h3 class="n-expert">Pau</h3>
        </div>
        <div class="pixel-content">
            <img src={imgRicky} alt=""/>
            <h3 class="n-expert">Ricky</h3>
        </div>
        <div class="pixel-content">
            <img src={imgJenny} alt=""/>
            <h3 class="n-expert">Jenny</h3>
        </div>
    </section>
      </section>

      
    </>
  );
}

export default Nosotros;