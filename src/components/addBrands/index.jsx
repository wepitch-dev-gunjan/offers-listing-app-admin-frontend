import React, { useRef, useState } from "react";
import useClickOutside from "../../customHooks/useClickOutside";
import "./style.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";

const AddBrand = ({ setAddBrandClicked }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const Ref = useRef(null);
  const [image, setImage] = useState(null);

  useClickOutside(Ref, () => setAddBrandClicked(false));

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Assuming the form inputs have 'name' attributes

    try {
      const formData = new FormData();
      formData.append("logo", image); // Assuming 'image' is a file input
      formData.append("description", description);
      formData.append("redirect_link", link);
      formData.append("title", title);

      console.log("Form Data:", formData);

      const response = await axios.post(
        `http://localhost:8080/brand`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Correct content type
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="AddBrand-container">
      <div className="add-brand">
        <form ref={Ref} onSubmit={handleSubmit}>
          <label>
            <div className="image_lable">
              <IoCloudUploadOutline size={90} />
              <br></br>
              Upload Image
              <input
                type="file"
                // value={image}
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </label>
          <br />
          <label>
            Heading
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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

          <br />
          <button className="add-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
