const mongoose= require("mongoose");


const blogmodel= mongoose.Schema({


    image: {
        type: String,
        required: [true, "please add the blog image"],
    },
    title: {
        type: String,
        required: [true, "Please add the blog heading"],
    },
    description : {
        type: String,
        required: [true, "Please add the blog description"],
    },
    paragraph: {
        type: String,
        required: [true, "Please add the blog paragraph"],
    },
},

  {
   timestamps:true,

  }

);
module.exports = mongoose.model("BLOG",blogmodel);