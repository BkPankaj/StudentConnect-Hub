const express= require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const complaintRoute = require("./routes/complaintRoute");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB Connected");
})
.catch((err) =>{
    console.log(err.message);
});

app.use("/api/auth",userRoutes);
app.use("/api/comp",complaintRoute);

const server = app.listen(5000, ()=>
    console.log(`Server started on Port ${process.env.PORT}`)
);