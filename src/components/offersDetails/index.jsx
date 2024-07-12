import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const OfferDetail = () => {
  const { offer_id } = useParams();
  const [offer, setOffer] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOfferDetails = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/offer/${offer_id}`
      );
      setOffer(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOfferDetails();
  }, [offer_id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error loading offer details.</div>;
  }

  return (
    <div className="offer-detail">
      <header className="offer-header">
        <div className="sale-banner">
          <div className="image-container">
            <img src={offer?.offer?.image} alt="Offer" />
          </div>
          <div className="text-container">
            <h1>{offer?.offer?.description}</h1>
            <p>Get</p>
            <h2>{offer?.offer?.discount_value} OFF</h2>
            <p>on Your Favorite Footwear Brands</p>
            <button className="shop-now-button">SHOP NOW</button>
          </div>
        </div>
      </header>
      <main className="sections">
        <section className="additional-section">
          <h2>Saved By Users</h2>
          <div className="user-list">
            {offer.savedUserDetails.map((data) => (
              <div key={data._id} className="user-item">
                <p>{data.username}</p>
                <Link to={`/user/${data._id}`}>Visit Profile</Link>
              </div>
            ))}
          </div>
        </section>
        <section className="additional-section">
          <h2>Grabbed By Users</h2>
          <div className="user-list">
            {offer.grabbed_byDetails.map((data) => (
              <div key={data._id} className="user-item">
                <p>{data.username}</p>
                <Link to={`/user/${data._id}`}>Visit Profile</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OfferDetail;
