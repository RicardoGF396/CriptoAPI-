function CardResult( {data} ) {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = data

  return (
      <div className="card-data">
        <div className="card-description">
          <img className="result-img" src={`https://cryptocompare.com/${IMAGEURL}`} alt="cripto-image" />
          <h2 className="result-name">Bitcoin</h2>
          <div className="section-price">
            <p className="subtitle-card">Precio más alto del día:</p>
            <p className="result-card"> {HIGHDAY} </p>
          </div>
          <div className="section-price">
            <p className="subtitle-card">Precio más bajo del día:</p>
            <p className="result-card">{LOWDAY}  </p>
          </div>
        </div>
        <div className="card-numbers">
          <div>
            <h2 className="result-value">{PRICE} </h2>
            <p className="result-status"> {LASTUPDATE} </p>
          </div>
          <div className="section-price variacion">
            <p className="subtitle-card">Variación últimas 24 horas:</p>
            <p className="result-card">{CHANGEPCT24HOUR}</p>
          </div>
        </div>
      </div>
  );
}

export default CardResult;
