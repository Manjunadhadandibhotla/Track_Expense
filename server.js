const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require('path')
const connectDb = require("./config/connectDB");
//const colors = require("colors");
// config dot env file
dotenv.config();
connectDb();
//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users',require('./routes/userRoute'))
//port
app.use('/api/v1/transactions',require('./routes/transactionRoutes'));

app.use(express.static(path.join(__dirname,'./client1/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client1/build/index.html'));

})

const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
