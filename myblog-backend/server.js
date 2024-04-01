const express=require("express");
const dotenv =require("dotenv").config();
const connectDb = require("./config/dbconnection");
const cors = require('cors')

connectDb();

const app=express();
app.use(cors())



const port = process.env.PORT ||3000;
app.use(express.json());
app.use("/api/blog", require("./routers/Router"));




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}).on('error', (err) => {
    console.error('Server start error:', err);
});