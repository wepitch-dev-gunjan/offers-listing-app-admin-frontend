import React, { useRef, useState } from "react";
import "./style.scss";
import useClickOutside from "../../customHooks/useClickOutside";
import axios from "axios";
import { IoCloudUploadOutline } from "react-icons/io5";

const AddOffer = ({ setAddOfferClicked }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [brand, setBrand] = useState("");
  const [expire_at, setExpireAt] = useState("");
  const Ref = useRef(null);

  useClickOutside(Ref, () => setAddOfferClicked(false));
  // edited
  console.log(image);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // edited
    try {
      const payload = { image, brand, name, description, link, expire_at };
      console.log("sdfsfd", payload);
      const formData = new FormData();
      // Append data to the FormData object
      formData.append("image", payload.image);
      formData.append("brand", payload.brand);
      formData.append("name", payload.name);
      formData.append("description", payload.description);
      formData.append("link", payload.link);
      formData.append("expire_at", payload.expire_at);
      const response = await axios.post(
        `http://localhost:8080/offer`,
        formData
      );
    } catch (error) {
      console.log("error");
      console.log(error);
    }
    // Handle form submission
    // console.log({ heading, description, link, image,brand,expireAt});
  };

  return (
    <div className="AddOffer-container">
      <div className="add-offer">
        <form ref={Ref} onSubmit={handleSubmit}>
          {/* <<<<<<< HEAD
          <label>
            Heading:
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Link:
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <br />
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <br />
          <button className="add-btn" type="submit">
            Submit
          </button>
======= */}
          <label>
            <div className="image_lable">
              <IoCloudUploadOutline s ize={90} />
              <br></br>
              Upload Image
              <input
                type="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                style={{ display: "none" }}
              />
            </div>
          </label>
          {/* <br></br> */}
          {/* brand */}
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Brand
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Link
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <br />
          <label>
            Expire_At
            <input
              type="text"
              value={expire_at}
              onChange={(e) => setExpireAt(e.target.value)}
            />
          </label>
          <br />
          <button className="add-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOffer;
