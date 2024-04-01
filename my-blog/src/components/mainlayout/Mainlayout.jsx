import React from "react";
import Header from "../header/Header";
import Blog from "../blog/Blog"
import Sidesection from"../sidesection/Sidesection"
import Popularpost from "../popularsection/Popularpost"
import Tagsection from "../tagsection/Tagsection"
import Footerdata from "../footer/Footerdata"




const Mainlayout = () => {
  return (
    <div className="blogform">
      <Header />
      <div className="postedblog">
        <div className="blogsection">
          <Blog />
        </div>
        <div class="side_section">
          <Sidesection />
          <Popularpost />
          <Tagsection />
        </div>
      </div>
      <Footerdata />
    </div>
  );
};

export default Mainlayout;
