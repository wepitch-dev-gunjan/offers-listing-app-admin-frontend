import React, { useContext, useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import axios from "axios";
import "./style.scss";
import { Link } from "@mui/material";
import { BrandContext } from "../../contexts/brand";

const Brands = ({ addBrandClicked, setAddBrandClicked }) => {
  const [brands, setBrands] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const { setIsDelete } = useContext(BrandContext);

  // Fetch brands data from API
  const getBrands = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/brand`);
      setBrands(data);
    } catch (error) {
      console.log("Can't render brands", error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  const handleDropdownToggle = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleEdit = (index) => {
    console.log("Edit", index);
    // Add your edit logic here
  };

  const handleDelete = (index) => {
    setIsDelete((prev) => !prev);

    console.log("Delete", index);
    // Add your delete logic here
  };

  const handleClickOutside = (event) => {
    if (dropdownVisible !== null && !event.target.closest(".dots")) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div className="Brands-container">
      <div className="add-brands-btn">
        <div className="add" onClick={() => setAddBrandClicked(true)}>
          Add Brands
        </div>
      </div>
      <div className="brands-parent">
        {brands.map((data, i) => (
          <div key={i} className="brand-children">
            <div className="dots" onClick={() => handleDropdownToggle(i)}>
              <HiOutlineDotsVertical />
              {dropdownVisible === i && (
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => handleEdit(i)}>
                    Edit
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>
            <div className="bc-left">
              <img src={data.logo} alt="" />
            </div>
            <div className="bc-right">
              <h3>{data.title}</h3>
              <p>{data.description.substring(0, 100)}...</p>
              <Link to="#">
                <p>Visit Brand's Page</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
