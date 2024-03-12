import React, { useState } from "react";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Offers from "./pages/offers";
import Brands from "./pages/brands";
import Navbar from "./components/Navbar";
import Users from "./pages/users";
import "./style.scss";
import AddOffer from "./components/addOffers";

const App = () => {
  const [addOfferClicked, setAddOfferClicked] = useState(false);

  return (
    <>
      {addOfferClicked && <AddOffer />}
      <div className="navbar" style={{ position: "sticky", top: 0 }}>
        <Navbar />
      </div>
      <div style={{ padding: "0px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/offers"
            element={
              <Offers
                addOfferClicked={addOfferClicked}
                setAddOfferClicked={setAddOfferClicked}
              />
            }
          />
          <Route path="/brands" element={<Brands />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
