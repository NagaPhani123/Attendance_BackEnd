const express = require("express");
const userModel = require("./models");
const app = express();

app.get("/get_user", async (request, response) => {
    // const user = new userModel(request.body);

    try {
        const result = await userModel.find();
        response.status(200).json(result);
    } catch (error) {
        response.statusCode(500).send(error);
    }
});

app.get("/get_user_byid", async (response) => {
    // const user = new userModel(request.body);

    try {
        const result = await userModel.find({ password : "lcs2021" });
        console.log(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;