
import React, { useState, useEffect } from "react";
import "./Blog.css";
import Blogposted from "./Blogposted";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/api/blog")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div>
      {posts.map((postData) => (
        <Blogposted key={postData.id} data={postData} />
      ))}
    </div>
  );
}
