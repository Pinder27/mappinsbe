const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const PinRoute = require('./routers/pins')
const UserRoute = require('./routers/users')
const dotenv = require('dotenv');
const path = require('path')

const app = express();

const _dirname = path.dirname("");
const buildPath = path.join(_dirname,'../mappinsfe/build')
app.use(express.static(buildPath))

app.use(cors({
    origin: ["http://localhost:3000"],
}));
app.use(express.json())
dotenv.config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb connected!");
}).catch((e)=>{
    console.log(e);
});
app.get('/',(req,res)=>{
    res.send("welcome to map pins backend");
})
app.use("/pin",PinRoute)
app.use("/user",UserRoute)
app.listen(process.env.PORT||5500,()=>{
    console.log('backend server is running on port:',process.env.PORT||5500);
})
