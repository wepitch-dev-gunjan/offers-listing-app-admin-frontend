import React, { useEffect, useState } from "react";
import "./style.scss";
import { CiShare1 } from "react-icons/ci";
import axios from "axios";

const Offers = ({ addOfferClicked, setAddOfferClicked }) => {
  const [offers, setOffers] = useState([]);

  const getOffers = async () => {
    try {
      const { data } = await axios.get`http://localhost:8080/offers`;
      setOffers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="Offers-container">
      <div className="add-offers-btn">
        <div className="add" onClick={() => setAddOfferClicked(true)}>
          Add Offers
        </div>
      </div>
      <div className="offers">
        <div className="row">
          {offers.map((data, i) => {
            return (
              <div className="offer" key={i}>
                <div className="offer-image">
                  <img src={data.image} alt="Offer image" />
                </div>
                <div className="offer-details">
                  <h3>{data.brand?.title}</h3>
                  <p>{data.description}</p>
                </div>
                <div className="offer-view">
                  View offer <CiShare1 fontWeight={400} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
