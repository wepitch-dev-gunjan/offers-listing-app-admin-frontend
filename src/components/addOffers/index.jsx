import React, { useRef, useState } from "react";
import "./style.scss";
import useClickOutside from "../../customHooks/useClickOutside";

const AddOffer = ({ setAddOfferClicked }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const Ref = useRef(null);

  useClickOutside(Ref, () => setAddOfferClicked(false));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ heading, description, link, image });
  };

  return (
    <div className="AddOffer-container">
      <div className="add-offer">
        <form ref={Ref} onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default AddOffer;
