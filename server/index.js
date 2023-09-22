const express = require('express');
const app = express();
const PORT = process.env.PORT || 1000;
const cors = require('cors')

// Middleware for parsing JSON data
app.use(express.json());
app.use(cors())


// Route to get the current location
app.post('/post', (req, res) => {
  // Check if the browser sent geolocation data

  const location = req.body
  // Here, you can use the latitude and longitude to fetch additional location data
  // For simplicity, let's return them as-is
//   const location = { latitude, longitude };
console.log(location)


  res.json({ location });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
