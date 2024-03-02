import React from "react";
import "./Market.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Market = () => {
  const [myMarkets, setMyMarkets] = useState([]);
  const [error, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;
      try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw Error(`Did not get required Data`);
        const respData = await resp.json();
        setMyMarkets(respData);
        console.log(respData);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.mesage);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [currentPage]);
  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      {!error ? (
        <h2 className="loadInfoHeader gradient-text">{error}</h2>
      ) : null}
      {isLoading ? (
        <h2 className="loadInfoHeader gradient-text">
          Loading Market Data....
        </h2>
      ) : null}
      <div id="marketContainer">
        <div className="marketContainerHeader">
          <h3>Market Updates</h3>
        </div>
        <div className="marketContainerBody">
          <div className="marketContainerBodyHeader">
            <h4>Coin</h4>
            <h4>Price</h4>
            <h4>24h Change</h4>
            <h4>Market Cap</h4>
          </div>
          <div className="marketContainerBodyBdy">
            {myMarkets.length &&
              myMarkets.map((val) => (
                <Link to={`/coin/${val.id}`} key={val.id} onClick={scrollTop}>
                  <li className="marketItem">
                    <div className="marketItemCoin">
                      <img src={val.image} alt={val.name} />
                      <h5>{val.name}</h5>
                    </div>
                    <p className="currentPrice">${val.current_price}</p>
                    <p
                      className="priceChange"
                      style={{
                        color:
                          val.market_cap_change_percentage_24h <= 0
                            ? "red"
                            : "green",
                      }}
                    >
                      {val.market_cap_change_percentage_24h}%
                    </p>
                    <p className="marketItemCap">
                      $ {numberWithCommas(val.market_cap)}{" "}
                    </p>
                  </li>
                </Link>
              ))}
          </div>
          <div
            onClick={scrollMarket}
            className="market-content__coin-list__pagination"
          >
            {paginationButtons}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
