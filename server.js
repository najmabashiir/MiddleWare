// express.json
const express = require('express');
const app = express();

app.use(express.json()); // Built-in middleware to parse JSON bodies

app.post('/data', (req, res) => {
    res.json({received: req.body});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});