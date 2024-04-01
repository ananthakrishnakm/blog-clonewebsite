import React, { useState } from 'react';
import axios from 'axios';
import Formpreview from './Formpreview';


const Admin = () => {
  const [input, setInput] = useState({
    image: '',
    title: '',
    description: '',
    paragraph: '',
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setInput({ ...input, [name]: value });
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
   
      await axios.post('http://localhost:3000/api/blog', input);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div >
      <div className="admin">
        <h2>ADMIN PANEL</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            value={input.image}
            onChange={handleInputChange}
          />
          <div className="formgroup">
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              value={input.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup">
            <input
              type="text"
              name="description"
              placeholder="Enter your description"
              value={input.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="formgroup">
            <input
              type="text"
              name="paragraph"
              placeholder="Enter your paragraph"
              value={input.paragraph}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submitbutton">
            SUBMIT
          </button>
        </form>
      </div>

  <div className="preview">
        <h2>Form Preview</h2>
        <Formpreview data={input} />
      </div>
    </div>
  );
};

export default Admin; 