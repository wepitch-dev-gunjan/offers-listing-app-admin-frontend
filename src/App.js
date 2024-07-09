import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Offers from "./pages/offers";
import Brands from "./pages/brands";
import Navbar from "./components/Navbar";
import Users from "./pages/users";
import "./style.scss";
import AddOffer from "./components/addOffers";
import AddBrand from "./components/addBrands";
import { UserContext } from "./contexts/User";
import { BrandContext } from "./contexts/brand";
import DeleteConfirmation from "./components/deleteBrand&Offers";

const App = () => {
  const [addOfferClicked, setAddOfferClicked] = useState(false);
  const [addBrandClicked, setAddBrandClicked] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const { isDelete, setIsDelete } = useContext(BrandContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [setLoggedIn]);

  return (
    <>
      {addOfferClicked && <AddOffer setAddOfferClicked={setAddOfferClicked} />}
      {addBrandClicked && <AddBrand setAddBrandClicked={setAddBrandClicked} />}
      {isDelete && (
        <div className="DeleteConfirmation">
          <div>
            <DeleteConfirmation setIsDelete={setIsDelete} />
          </div>{" "}
        </div>
      )}
      <div className="navbar" style={{ position: "sticky", top: 0 }}>
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
      </div>
      <div style={{ padding: "0px" }}>
        <Routes>
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/offers" replace />
              ) : (
                <Login setLoggedIn={setLoggedIn} />
              )
            }
          />
          <Route
            path="/offers"
            element={
              loggedIn ? (
                <Offers
                  addOfferClicked={addOfferClicked}
                  setAddOfferClicked={setAddOfferClicked}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/brands"
            element={
              loggedIn ? (
                <Brands
                  addBrandClicked={addBrandClicked}
                  setAddBrandClicked={setAddBrandClicked}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/users"
            element={loggedIn ? <Users /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/"
            element={<Navigate to={loggedIn ? "/offers" : "/login"} replace />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
