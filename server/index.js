const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./Database/db');

// Middleware
app.use(cors());

// Routes
app.get('/users', async(req, res) => {
    try 
    {
        const { name } = req.query;
        const users = await pool.query(
            "SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE $1", 
            [`%${name}%`]
        );
        res.json(users.rows);
    } 
    catch (error) {
        console.error(error.message);
    }
})

app.listen(3002, () => console.log("server has started on port 3002"));