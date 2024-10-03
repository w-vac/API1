const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

/* Removed for testing purposes
// API key authentication middleware
const apiKey = 'your-api-key'; // Replace with your API key
app.use((req, res, next) => {
    const requestApiKey = req.header('X-Api-Key');
    if (requestApiKey && requestApiKey === apiKey) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid or missing API key' });
    }
});
*/

// In-memory array to store users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'employee', description: 'Senior Developer' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'manager', description: 'Team Lead' }
];

// GET endpoint to retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET endpoint to retrieve a user by ID
app.get('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST endpoint to add a new user
app.post('/api/users', (req, res) => {
    const { name, email, role, description } = req.body;
    if (!name || !email || !role) {
        return res.status(400).json({ message: 'Bad Request: Missing required fields' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        role,
        description: description || '' // Optional field
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT endpoint to update an existing user by ID
app.put('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const { name, email, role, description } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's details
    users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
        role: role || users[userIndex].role,
        description: description || users[userIndex].description
    };

    res.json(users[userIndex]);
});

// DELETE endpoint to remove a user by ID
app.delete('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1); // Remove the user from the array
    res.status(204).send(); // No content response for successful deletion
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
