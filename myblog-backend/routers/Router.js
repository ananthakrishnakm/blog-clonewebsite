 const express=require("express");
 const router=express.Router();
const {blogget, blogcreate } = require("../controller/Dbcontroller");

 router.route("/").get(blogget);

router.route("/").post(blogcreate);




module.exports=router;