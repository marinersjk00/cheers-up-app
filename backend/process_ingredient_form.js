const express = require('express');
const app = express();

const port = 5173;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to handle text submission
app.post('/process-ingredient-form', (req, res) => {
  const text  = req.body;
  // Process the text (e.g., save to database, perform operations)
  console.log('Received text:', text);
  // Respond with success or any data if needed
  res.status(200).send('Text received successfully.');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
