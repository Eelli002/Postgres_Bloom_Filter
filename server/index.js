const express = require('express');
const cors = require('cors');
const app = express()

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.listen(3002, () => console.log("server has started on port 3002"));