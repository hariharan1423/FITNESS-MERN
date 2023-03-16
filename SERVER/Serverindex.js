const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const multer = require("multer");
const path = require("path");
app.use(cors());
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))

dotenv.config();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"images")
  },filename:(req,file,callback) =>{
    callback(null,req.body.name);
  }
});

const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded");
})


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);

app.listen(3001, () => {
  console.log("Port-connected");
});