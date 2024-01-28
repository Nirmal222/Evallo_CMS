const express = require('express');

const app = express.Router();
const Content = require('./content.schema.js');
app.post('/create', async (req, res) => {
    try {
        let newContent = await Content.create(req.body);
        res.status(200).send("Data Stored Successfully");
    }
    catch (error) {
        console.log(error, "error");
        res.send({ error })
    }
})


module.exports = app;
