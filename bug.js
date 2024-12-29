const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.json(userData);
});

//Problem: The above code is vulnerable to unexpected input. If the database query fails due to an invalid user ID, the application may crash or leak sensitive information. 

//Insecure handling of errors can lead to unexpected crashes or information leakage. For example, if the database query fails for some reason, the application might throw an unhandled exception which could reveal sensitive information about the database structure or the application's internal workings.
