import "./gallery.css";
const imgClose = process.env.PUBLIC_URL + "/img/closeLight.svg";
const imgJenny = process.env.PUBLIC_URL + "/img/avatar_jenny.png";
function Gallery() {
return (
    <>
      <section class="gallery" id="portfolio">
        <div class="contenedor">
        <h2 class="subtitulo">Galeria</h2>
        <div class="contenedor-galeria">
        <img src={imgJenny} alt="" class="img-galeria"/>
        <img src={imgJenny} alt="" class="img-galeria"/>
        <img src={imgJenny} alt="" class="img-galeria"/>
        <img src={imgJenny} alt="" class="img-galeria"/>
        </div>
        </div>
      </section>
      <section class="imagen-light">
        <img src={imgClose} alt="" class="close"/>
        <img src={imgJenny} alt="" class="agregar-imagen"/>
      </section>

      
    </>
  );
}

export default Gallery;