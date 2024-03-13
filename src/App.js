import React, { useContext, useState } from "react";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Offers from "./pages/offers";
import Brands from "./pages/brands";
import Navbar from "./components/Navbar";
import Users from "./pages/users";
import "./style.scss";
import AddOffer from "./components/addOffers";
import AddBrand from "./components/addBrands";
import { UserContext } from "./contexts/User";

const App = () => {
  const [addOfferClicked, setAddOfferClicked] = useState(false);
  const [addBrandClicked, setAddBrandClicked] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <>
      {addOfferClicked && <AddOffer setAddOfferClicked={setAddOfferClicked} />}
      {addBrandClicked && <AddBrand setAddBrandClicked={setAddBrandClicked} />}
      <div className="navbar" style={{ position: "sticky", top: 0 }}>
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
      </div>
      <div style={{ padding: "0px" }}>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/offers"
            element={
              <Offers
                addOfferClicked={addOfferClicked}
                setAddOfferClicked={setAddOfferClicked}
              />
            }
          />
          <Route
            path="/brands"
            element={
              <Brands
                addBrandClicked={addBrandClicked}
                setAddBrandClicked={setAddBrandClicked}
              />
            }
          />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
