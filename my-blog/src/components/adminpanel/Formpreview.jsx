import React, { useState } from 'react';

const Formpreview = ({ data }) => {
  const { title, description,paragraph  } = data;
  const [showFullContent, setShowFullContent] = useState(false);
  console.log('ghvjhg',data.paragraph)

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blogs">
      <img src={data.image} alt=''   style={{ width: '480px', height: '200px' }}  />
      <h1>{title}</h1>
      <h5 >{description}</h5>
      <p style={{wordBreak:"break-word"}}>
        {showFullContent ? paragraph : paragraph.slice(0, 50)}
        {/* {!showFullContent && data.paragraph.length > 100 && '...'} */}
      </p>
      
      <button className="footerbtn" onClick={handleToggleContent}>
        {showFullContent ? "READ MORE " : " READ LESS"}
      </button>
    </div>
  );
};

export default Formpreview;









