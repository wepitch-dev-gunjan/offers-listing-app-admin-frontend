import React from "react";
import "./style.scss";
import { CiShare1 } from "react-icons/ci";

const Offers = ({ addOfferClicked, setAddOfferClicked }) => {
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
    <div className="Offers-container">
      <div className="add-offers-btn">
        <div className="add" onClick={() => setAddOfferClicked(true)}>
          Add Offers
        </div>
      </div>
      <div className="offers">
        <div className="row">
          {data.map((data, i) => {
            return (
              <div className="offer" key={i}>
                <div className="offer-image">
                  <img src={data.img} alt="Offer image" />
                </div>
                <div className="offer-details">
                  <h3>{data.heading}</h3>
                  <p>{data.para}</p>
                </div>
                <div className="offer-view">
                  View offer <CiShare1 fontWeight={400} />
                </div>
              </div>
            );
          })}

          <div className="offer">
            <div className="offer-image">
              <img
                src="https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg"
                alt="Offer image"
              />
            </div>
            <div className="offer-details">
              <h3>Offer Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                harum id provident quos voluptatem delectus optio perferendis
                placeat dicta facere ducimus deserunt animi repudiandae labore
                autem enim? Numquam, soluta officia?
              </p>
            </div>
            <div className="offer-view">
              View offer <CiShare1 fontWeight={400} />
            </div>
          </div>

          <div className="offer">
            <div className="offer-image">
              <img
                src="https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg"
                alt="Offer image"
              />
            </div>
            <div className="offer-details">
              <h3>Offer Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                harum id provident quos voluptatem delectus optio perferendis
                placeat dicta facere ducimus deserunt animi repudiandae labore
                autem enim? Numquam, soluta officia?
              </p>
            </div>
            <div className="offer-view">
              View offer <CiShare1 fontWeight={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
