const express = require('express');
const app = express();
const userRoutes = require('./userRoutes')

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});


// Static route
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});


// Dynamic route
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; 
    res.send(`User ID: ${userId}`);
});



// Grouped routes under "/users"
app.use('/users', userRoutes);


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
