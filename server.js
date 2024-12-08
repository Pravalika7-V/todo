const express = require('express');
const path = require('path');
const app = express();

const todos = []; // Array to store to-do items

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST request to add a to-do item
app.post('/add', (req, res) => {
    const todo = req.body.todo;
    if (todo) {
        todos.push(todo);
    }
    res.redirect('/');
});

// Handle GET request to fetch all to-do items
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
