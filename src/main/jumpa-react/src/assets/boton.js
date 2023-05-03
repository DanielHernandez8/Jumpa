import './boton.css';
import React from 'react';

function Boton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button">JUMPA</button>
    </div>
  );
}

export default Boton;