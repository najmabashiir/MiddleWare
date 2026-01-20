// express.json
const express = require('express');
const app = express();

// app.use(express.json()); // Built-in middleware to parse JSON bodies

// app.post('/data', (req, res) => {
//     res.json({received: req.body});
// });

// Built-in Middleware: express.static()
app.use(express.static('public')); // Serve static files from 'public' directory

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



