// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bfhlRoutes); // Use the routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
