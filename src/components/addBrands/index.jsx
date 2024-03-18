import React, { useRef, useState } from 'react';
import useClickOutside from '../../customHooks/useClickOutside';
import './style.scss'
import { IoCloudUploadOutline } from "react-icons/io5";

const AddBrand = ({setAddBrandClicked}) => {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const Ref = useRef(null);
    const [image, setImage] = useState(null);

    useClickOutside(Ref, () => setAddBrandClicked(false));

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log({ heading, description, link, image });
    };

    return (
        <div className="AddBrand-container">
            <div className="add-brand">

        <form ref={Ref} onSubmit={handleSubmit}>
        <label>
        <div className="image_lable">
        <IoCloudUploadOutline size={90}/>
        <br>
        </br>
        Upload Image
              
                <input type="file"value={image} onChange={(e) => setImage(e.target.value)} style={{display:'none'}} />
        </div>
            </label>
            <br />
            <label>
                Heading
                <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />
            </label>
            <br />
            <label>
                Description
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
                Link
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
            </label>
            <br />
          
            <br />
            <button className='add-btn' type="submit">Submit</button>
        </form>
            </div>
        </div>
    );
};

export default AddBrand;
