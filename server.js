require('dotenv').config({path:"./config.env"});
const express = require('express');
const cors = require('cors');
//const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');


//db connections
//connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/",(req,res)=>{
    res.json({
        msg:"Hello from PPL Servers yo ab bata?"
    })
});

/*app.use("/api/auth",require("./routes/auth"));
app.use("/api/admin",require("./routes/admin"));
app.use("/api/school",require("./routes/school"));*/


//error handleer should be last piece of middleware check now?
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT,()=>console.log(`server is running on ${PORT}`));

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged Error: ${err}`);
    server.close(()=>process.exit(1));
})