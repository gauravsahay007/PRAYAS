
require('dotenv').config()

// DB CONNECTIONS
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
mongoose.set('strictQuery', true);

app.use(bodyParser.json());



app.use(cookieParser());
app.use(cors());
const authRoutes = require("./routes/auth");
const categoryRoutes=require("./routes/category");
const userRoutes=require("./routes/user");
const productRoutes=require("./routes/product");

const eventRoutes=require("./routes/events");
// my routes
app.use("/api", authRoutes);
app.use("/api",categoryRoutes);
app.use("/api",userRoutes);
app.use("/api",productRoutes);

app.use("/api",eventRoutes);
mongoose.connect(process.env.DATABASE,{   
}).then(()=>{   
    console.log("DB Connected")
})
const port = process.env.PORT || 5070;

app.listen(port, ()=> {
    console.log(`app is running at port ${port}`)

}) 

