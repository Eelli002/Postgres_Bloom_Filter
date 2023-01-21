const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./Database/db');

// Middleware
app.use(cors());

// Routes
app.get('/users', async(req, res) => {
    try {
        res.json(req.query);
    } 
    catch (error) {
        console.error(error.message);
    }
})

app.listen(3002, () => console.log("server has started on port 3002"));