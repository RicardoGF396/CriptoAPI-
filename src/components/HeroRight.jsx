import { useSelectMoney } from "../hooks/useSelectMoney";
import MoneyImg from "../assets/money.svg";
import ArrowsImg from "../assets/arrows.svg";
import { useEffect, useState } from "react";
import Error from "./Error";
import CardResult from "./CardResult";
import NoData from "./NoData";
import Spinner from './../assets/spinner.svg'

function HeroRight() {
  const money = [
    { id: "USD", nombre: "Dolar americano" },
    { id: "MXN", nombre: "Peso mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra esterlina" },
  ];

  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  const [noData, setNoData] = useState(true)

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMoneda] = useSelectMoney("Elige tu moneda", money);
  const [criptomoneda, SelectCriptomoneda] = useSelectMoney(
    "Elige tu criptomoneda",
    criptos
  );

  useEffect(() => {
    const criptoAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await fetch(url);
      const object = await res.json();

      const arrayCriptos = object.Data.map((cripto) => {
        const object = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return object;
      });

      setCriptos(arrayCriptos);
    };

    criptoAPI();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    
    const cotizarCripto = async () => {
      setResultado({})
      setNoData(false)
      setCargando(true)
      const url = 
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const result = await respuesta.json()

      setResultado(result.DISPLAY[criptomoneda][moneda])
      setCargando(false)
    }

    cotizarCripto()
    
  };

  return (
    <div className="right-container">
      <div className="right-content">
        <form onSubmit={handleSubmit}>
          <div className="card-form">
            {error && <Error children={"Todos los campos son obligatorios"} />}
            <div className="title-card">
              <img src={MoneyImg} />
              <h3>Cotización rápida y nueva </h3>
            </div>

            <div className="container-select">
              <SelectMoneda />
              <SelectCriptomoneda />
            </div>
          </div>
          <div className="result-container">
            <img alt="arrows" src={ArrowsImg} className="arrows-circle" />
            <div className="cardResult">
            {noData && <NoData/>}
            {cargando && <img alt="loading" width={80} src={Spinner} />}
            {resultado.PRICE ? <CardResult data={resultado} /> : null}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Cotizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroRight;
