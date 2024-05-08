import React, { useEffect, useState } from "react";
import "./style.scss";
import { CiShare1 } from "react-icons/ci";
import axios from "axios";
const Brands = ({ addBrandClicked, setAddBrandClicked }) => {
  const [brand, setBrand] = useState([]);
  let img =
    "https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg";
  let para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,harum id provident quos voluptatem delectus optio perferendisplaceat dicta facere ducimus deserunt animi repudiandae laboreautem enim? Numquam, soluta officia?";

  const getOffers = async () => {
    const { data } = await axios.get(`http://localhost:8080/brand`);
    setBrand(data);
  };
  useEffect(() => {
    getOffers();
  }, []);
  console.log(brand);
  return (
    <div className="Brands-container">
      <div className="add-brands-btn">
        <div className="add" onClick={() => setAddBrandClicked(true)}>
          Add Brands
        </div>
      </div>
      <div className="brands">
        {brand.map((data, i) => {
          return (
            <div className="col">
              <div className="brand">
                <div className="brand-image">
                  <img src={data.logo} alt="brand image" />
                </div>
                <div className="brand-details">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <div className="brand-view">
                    View brand page
                    <CiShare1 fontWeight={400} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
