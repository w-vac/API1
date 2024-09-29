const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory array to store users
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// GET endpoint to retrieve users
app.get('/api/users', (req, res) => {
    res.json(users); // Return the users array
});

app.get('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Logic to find the user by ID in your data source (database or array)
    const user = users.find(u => u.id === parseInt(userId)); // Assuming 'users' is your data source
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  

// POST endpoint to add new users
app.post('/api/users', (req, res) => {
    const newUser = req.body; // Get the user data from the request body
    newUser.id = users.length + 1; // Assign a new ID based on the current length
    users.push(newUser); // Add the new user to the array
    res.status(201).json(newUser); // Respond with the created user
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
