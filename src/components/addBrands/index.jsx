import React, { useContext, useRef, useState } from "react";
import useClickOutside from "../../customHooks/useClickOutside";
import "./style.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import CategorySelect from "../category";
import { BrandContext } from "../../contexts/brand";
// import { Toast } from "bootstrap";

const AddBrand = () => {
  const { addBrandClicked, setAddBrandClicked } = useContext(BrandContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const Ref = useRef(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");  // Add a state for category

  // Handle click outside to close the form
  useClickOutside(Ref, () => setAddBrandClicked(false));

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check that image is selected and other fields are filled
    if (!image || !title || !description || !link || !category) {
      console.error("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("logo", image); // Assuming 'image' is a file input
      formData.append("description", description);
      formData.append("redirect_link", link);
      formData.append("title", title);
      formData.append("category", category);  // Add category to form data

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
      setAddBrandClicked(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="AddBrand-container">
      <div className="add-brand" ref={Ref}>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="image_lable">
              <IoCloudUploadOutline size={90} />
              <br></br>
              Upload Image
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "none" }}
                accept="image/*"  // Ensure only image files are selected
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
              required  // Ensure the field is required
            />
          </label> 


          <label>
            Link
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required  // Ensure the field is required
            />
          </label>



          <br />
          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required  // Ensure the field is required
            />
          </label>
          <br />

          <label>

            store


          </label>
          <br></br>






          <label>
            Category
            {/* <CategorySelect onChange={(selectedCategory) => setCategory(selectedCategory)} /> */}
          </label>
          <br />
          <label>
            Link
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required  // Ensure the field is required
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

export default AddBrand;
