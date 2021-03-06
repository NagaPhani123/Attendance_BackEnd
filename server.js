const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

var cors = require("cors");

const app = express();

dotenv.config();

app.use(cors({ origin : true, credentials : true }));
app.use(express.json());

mongoose
    .connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDb"))
    .catch((err) => (console.log(err)));

app.use(Router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});