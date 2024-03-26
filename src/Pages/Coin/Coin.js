import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Coin.css";

const Coin = () => {
  const { id } = useParams();
  const [currentCoin, setCurrentCoin] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw Error(`Unable to Fetch Data`);
        const respData = await resp.json();
        setCurrentCoin(respData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API_URL]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(currentCoin);
  const h24 = currentCoin.market_data
    ? currentCoin.market_data.price_change_24h.toFixed(2) + "%"
    : "";
  console.log(typeof h24);
  return (
    <section className="coinContainer">
      <div className="coinDivContainer">
        <div onLoad={() => setLoading(false)} className="coinContent">
          {currentCoin ? (
            <>
              <div className="flexDiv_1">
                {currentCoin.image ? (
                  <img src={currentCoin.image.large} alt={currentCoin.id} />
                ) : null}
                <p>Market Rank: {currentCoin.market_cap_rank}</p>
              </div>
              <div className="flexDiv_2">
                <div className="flexSpan">
                  <span>
                    24 hr Change:
                    <span className={parseInt(h24) > 0 ? "green" : "red"}>
                      {h24}{" "}
                    </span>
                  </span>
                  <span>
                    Price:{" "}
                    <span className="green">
                      {currentCoin.market_data
                        ? "$" +
                          numberWithCommas(
                            currentCoin.market_data.current_price.usd.toFixed(2)
                          )
                        : null}
                    </span>
                  </span>
                  <span>Symbol:{currentCoin.symbol}</span>
                </div>
                <div className="coinDesc">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        currentCoin.description
                          ? currentCoin.description.en
                          : ""
                      ),
                    }}
                  ></p>
                </div>
              </div>
            </>
          ) : (
            <h3>Unable to retrieve Coin Data</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Coin;
