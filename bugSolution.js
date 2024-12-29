const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // ... some database operation to fetch user data ...
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Improved Error Handling: The improved code uses try...catch blocks to handle potential errors.  If a database error occurs, a 500 Internal Server Error response is returned to the client with a generic error message. This prevents crashes and hides potentially sensitive details from the user.