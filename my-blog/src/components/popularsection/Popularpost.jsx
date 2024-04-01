import React from "react";
import post from "./Post";
import "./popularposts.css"

export default function Popularpost() {
  return (
<div  className="popularsection">
    <div className="aboutpost">
        <h4>popularpost</h4>
    </div>
      {post.map((data,index) => (
        <div className="popularpost" key={index}>
            <div className=" imagesection  ">
          <img src={data.Image} alt="imag" />
          </div>
          <div className="about">
          <h1>{data.title}</h1>
          <h5>{data.description}</h5>
          <h5>{data.paragraph}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
