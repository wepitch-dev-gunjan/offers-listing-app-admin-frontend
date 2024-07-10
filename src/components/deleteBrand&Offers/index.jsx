import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const DeleteConfirmation = ({ setIsDelete }) => {
  const getLastUrlSegment = () => {
    const urlSegments = window.location.pathname.split("/");
    return urlSegments[urlSegments.length - 1];
  };

  const brandId = getLastUrlSegment();
  console.log(brandId);
  const handleBrandDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/brand/${brandId}`
      );
      console.log("Delete confirmed!");
    } catch (error) {}
  };
  const handleCancleBrandDelete = () => {
    setIsDelete(false);
  };

  return (
    <div className="deleteBrandMain">
      <div>
        <h5>Are you sure you want to delete this?</h5>
        <div>
          <button onClick={handleBrandDelete}>Yes</button>
          <button onClick={handleCancleBrandDelete}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
