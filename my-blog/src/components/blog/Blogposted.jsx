import React, { useState } from 'react';

export default function Blogposted({ data }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div>
      <div className="blogs" >
        <img src={data.image} alt="imag" />
        <h1>{data.title}</h1>
        <h5 style={{wordBreak:'break-all'}}>{data.description}</h5>
        <p style={{wordBreak:'break-all'}}>{showFullContent ? data.paragraph : data.paragraph.slice(0, 50)}</p>
        <div className="postfooter">
        <button className="footerbtn" onClick={handleToggleContent}>
          {!showFullContent? "READMORE":"READLESS"}
          </button>

          <div className="commentsection">
            <p>{data.comment}</p>
            <div className="commentcount">
              <p>{data.num}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



