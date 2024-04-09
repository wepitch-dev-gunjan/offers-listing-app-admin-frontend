import React from "react";
import "./style.scss";
import { CiShare1 } from "react-icons/ci";
const Brands = ({ addBrandClicked, setAddBrandClicked }) => {
  let img =
    "https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg";
  let para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,harum id provident quos voluptatem delectus optio perferendisplaceat dicta facere ducimus deserunt animi repudiandae laboreautem enim? Numquam, soluta officia?";
  const data = [
    { id: 1, img: img, heading: "Offer Heading", para: para },
    { id: 2, img: img, heading: "Offer Heading", para: para },
    { id: 3, img: img, heading: "Offer Heading", para: para },
    { id: 4, img: img, heading: "Offer Heading", para: para },
    { id: 5, img: img, heading: "Offer Heading", para: para },
    { id: 6, img: img, heading: "Offer Heading", para: para },
  ];
  return (
    <div className="Brands-container">
      <div className="add-brands-btn">
        <div className="add" onClick={() => setAddBrandClicked(true)}>
          Add Brands
        </div>
      </div>
      <div className="brands">
        {data.map((data, i) => {
          return (
            <div className="col">
              <div className="brand">
                <div className="brand-image">
                  <img src={data.img} alt="brand image" />
                </div>
                <div className="brand-details">
                  <h3>{data.heading}</h3>
                  <p>{data.para}</p>
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
