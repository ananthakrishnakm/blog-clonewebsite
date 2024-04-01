const asyncHandler = require("express-async-handler");
const blogModel = require("../models/Blogmodel");

// getblog
const blogget = asyncHandler(async (req, res) => {
  const model = await blogModel.find();
  res.status(200).json(model);
});

const blogcreate = asyncHandler(async (req, res) => {
  console.log("the request body is:", req.body);
  const { image, description, paragraph, title } = req.body;


  const blog = await blogModel.create({
    image,
    title,
    description,
    paragraph,
  });

  res.status(201).json(blog);
});

module.exports = { blogget, blogcreate };
