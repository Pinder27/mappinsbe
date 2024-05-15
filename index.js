const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const PinRoute = require('./routers/pins')
const UserRoute = require('./routers/users')
const dotenv = require('dotenv');

const app = express();

app.use(cors({
    origin: ["https://main.dmey0lfnd7610.amplifyapp.com","http://localhost:3000"],
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
