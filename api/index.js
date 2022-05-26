const  express = require('express')
const app=express();
const mongoose= require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("DB Connection Successfully")})
.catch((err)=>{console.log(err)})
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute)

app.listen(8800,()=>{console.log("Backend server is running")});


