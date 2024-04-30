const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const assistantRoute=require("./routes/assistant");
const app=express();


dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log(err)
});


app.use(express.json());                                    // to accept json files
app.use("/assistant",assistantRoute);


app.listen(process.env.PORT|| 5000,()=>{
    console.log("Backend Server is Running");
})