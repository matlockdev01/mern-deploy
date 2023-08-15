const path = require("path")
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
const MongoStore = require("connect-mongo")
const connectDB = require("./config/db")
const passport = require("passport-google-oauth20");
const session = require("express-session");
const app = express();
const cors = require("cors")
require("dotenv").config();

// passport config
require()

//middleware
const corsOptions = {
    origin: "https://mern-deploy-frontend-d13m.onrender.com", 
}
app.use(express.json());
app.use(cors(corsOptions))

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

//route 
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});