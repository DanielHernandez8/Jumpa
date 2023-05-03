import "./teamb.css";
const imgteam = process.env.PUBLIC_URL + "/img/Mountain.svg";
function TeamB() {
return (
    <>
      <main>
        <section class="services contenedor" id="servicio">
          <h2 class="subtitulo">Nuestro Servicio</h2>
          <div class="contenedor-servicio">
            <img src={imgteam} alt=""/>
            <div class="checklist-servicio">
              <div class="service">
                <h3 class="n-service">
                  <span class="number">1</span>Coincienciar
                </h3>
                <p>
                  Queremos coincienciar a las nuevas generaciones con buenos hábitos
                </p>
              </div>
              <div class="service">
                <h3 class="n-service">
                  <span class="number">2</span>Diversión
                </h3>
                <p>
                  No hay mejor manera de aprender que con juegos
                </p>
              </div>
              <div class="service">
                <h3 class="n-service">
                  <span class="number">3</span>Nuestro granito de arena
                </h3>
                <p>
                  Cada acción cuenta y juntos podemos revertir la situación
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}

export default TeamB;