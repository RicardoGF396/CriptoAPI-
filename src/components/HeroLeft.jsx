import React from "react";
import arrow from "./../assets/arrow_how.svg";
import logo1 from "./../assets/logo1.svg";
import logo2 from "./../assets/logo2.svg";
import logo3 from "./../assets/logo3.svg";
import circuit from "./../assets/circuits_down.svg"

function HeroLeft() {
  return (
    <div>
      <div className="left-container">
        <div className="left-content">
          <h1>La forma más <br />sencilla de cotizar tus criptomonedas</h1>
          <p className="left-text">
            Somos la plataforma número #1 que te ayuda a cotizar tu dinero en
            unos cuantos clics. Nuestro objetivo con los clientes es
            proporcionarles la información de sus criptomonedas lo más sencillo
            posible.
          </p>
          <div className="action-buttons">
            <button className="see-more">Ver más</button>
            <div className="how-works-container">
              <p className="how-works">¿Cómo funciona?</p>
              <img src={arrow} alt="arrow-how" />
            </div>
          </div>
        </div>

        <div className="bottom-rectangle">
            <h2>Apoyado por</h2>
            <div className="logos-container">
                <img alt="logo-1" src={logo1} />
                <img alt="logo-2" src={logo2} />
                <img alt="logo-3" src={logo3} />
            </div>
        </div>

        <img className="circuit-left" alt="circuit-left" src={circuit} />

      </div>
    </div>
  );
}

export default HeroLeft;
