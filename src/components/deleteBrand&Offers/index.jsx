import React from "react";

const DeleteConfirmation = ({ setIsDelete }) => {
  console.log();
  const handleBrandDelete = () => {
    console.log("Delete confirmed!");
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
