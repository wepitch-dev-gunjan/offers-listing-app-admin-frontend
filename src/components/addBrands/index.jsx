import React, { useContext, useEffect, useRef, useState } from "react";
import useClickOutside from "../../customHooks/useClickOutside";
import "./style.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import { BrandContext } from "../../contexts/brand";

const AddBrand = () => {
  const { addBrandClicked, setAddBrandClicked } = useContext(BrandContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [stores, setStores] = useState([""]); // State for managing store inputs
  const [image, setImage] = useState(null);
  // State for category
  const [subCategory, setSubCategory] = useState(""); // State for subcategory
  const [subCategories, setSubCategories] = useState([]); // State for storing subcategories
  const [showSubCategory, setShowSubCategory] = useState(false); // State for showing subcategory dropdown
  const Ref = useRef(null);

     const[category,setCategory]=useState([]);
  



  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/category`);
      setCategory(data);
      console.log("name", data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

 

  useClickOutside(Ref, () => setAddBrandClicked(false));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image || !title || !description || !link || !category) {
      console.error("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("logo", image);
      formData.append("description", description);
      formData.append("redirect_link", link);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("subcategory", subCategory);
      stores.forEach((store, index) => {
        formData.append(`store[${index}]`, store);
      });

      const response = await axios.post(
        `http://localhost:8080/brand`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setAddBrandClicked(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addStoreInput = () => {
    setStores([...stores, ""]);
  };

  const removeStoreInput = (index) => {
    setStores(stores.filter((_, i) => i !== index));
  };

  const handleStoreChange = (index, value) => {
    const newStores = stores.map((store, i) => (i === index ? value : store));
    setStores(newStores);
  };
  useEffect(()=>{
    fetchCategory()
  },[])

  // const handleShowSubCategory = () => {
  //   if (category) {
  //     fetchCategory();
  //     // setShowCategory(true);
  //   } else {
  //     console.error("Please select a category first.");
  //   }
  // };

  const handleDeleteSubCategory = () => {
    setSubCategory("");
    setShowSubCategory(false);
  };

  return (
    <div className="AddBrand-container">
      <div className="add-brand" ref={Ref}>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="image_lable">
              <IoCloudUploadOutline size={90} />
              <br />
              Upload Image
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </label>
          <br />

          <div className="hadinglink">
            <div className="hading">
              <label>hading</label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required // Ensure the field is required
              />
            </div>

            <div className="link">
              <label>Link</label>

              <input
                type="text"
                value={link}
                onChange={(e) => setTitle(e.target.value)}
                required // Ensure the field is required
              />
            </div>
          </div>

          <br />
          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
            />
          </label>
          <br />

          <div className="store">
            <label>Store</label>
            {stores.map((store, index) => (
              <div key={index} className="form-group storee">
                <input
                  type="text"
                  value={store}
                  onChange={(e) => handleStoreChange(index, e.target.value)}
                  required
                  className="form-control"
                />
                <span
                  className="iconn"
                  onClick={() => removeStoreInput(index)}
                  style={{ cursor: "pointer" }}
                >
                  🗑️
                </span>
              </div>
            ))}
            <span
              className="iconn"
              onClick={addStoreInput}
              style={{ cursor: "pointer" }}
            >
              +
            </span>
          </div>

          <br />

          <div className="category-subcategory">
            <div>
              <label>
                Category
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="form-control ct"
                >
                
                  {category.map((category) => (
                    <option key={category.value} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="iconn"
                // onClick={handleShowSubCategory}
                style={{ cursor: "pointer" }}
              >
                +
              </button>
              <button
                type="button"
                className="iconn"
                onClick={handleDeleteSubCategory}
                style={{ cursor: "pointer" }}
              >
                🗑️
              </button>
            </div>

            {showSubCategory && subCategories.length > 0 && (
              <div>
                <label>
                  Subcategory
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                    className="form-control ct"
                  >
                    <option value="" disabled>
                      Select a subcategory
                    </option>
                    {subCategories.map((subCategory) => (
                      <option key={subCategory.value} value={subCategory.value}>
                        {subCategory.label}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="button"
                  className="iconn"
                  onClick={handleDeleteSubCategory}
                  style={{ cursor: "pointer" }}
                >
                  🗑️
                </button>
              </div>
            )}
          </div>

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





