import "./footer.css";
function Footer() {
  return (
    <>
      <footer id="contacto">
        <div class="contenedor footer-content">
          <div class="contact us">
            <h2 class="brand">JUMPA</h2>
            <p>
              Desarrollado por Daniel Hernandez, Ricardo Castro, Jennifer
              Rodriguez y Pau Espinás
            </p>
          </div>
          <div class="social-media">
            <a href="./" class="social-media-icon1">
              <i class="linkedin1"></i>
              <span class="my-tooltip"></span>
            </a>
            <a href="./" class="social-media-icon2">
              <i class="linkedin2"></i>
            </a>
            <a href="./" class="social-media-icon3">
              <i class="linkedin3"></i>
            </a>

            <a href="./" class="social-media-icon4">
              <i className="linkedin4"></i>
            </a>
          </div>
        </div>
        <div class="line"></div>
      </footer>
    </>
  );
}

export default Footer;
