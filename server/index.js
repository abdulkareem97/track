const express = require('express');
const app = express();
const PORT = process.env.PORT || 1000;
const cors = require('cors')

// Middleware for parsing JSON data
app.use(express.json());
app.use(cors())


app.get('/',(req,res)=>{
    res.send("hello")
})

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

// const express = require('express');
// const https = require('https');
// const fs = require('fs');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 443; // Port 443 is the default HTTPS port

// // Middleware for parsing JSON data
// app.use(express.json());
// app.use(cors());

// // Your routes...

// app.get('/',(req,res)=>{

// })
// app.post('/post', (req, res) => {
//   // Check if the browser sent geolocation data

//   const location = req.body
//   // Here, you can use the latitude and longitude to fetch additional location data
//   // For simplicity, let's return them as-is
// //   const location = { latitude, longitude };
// console.log(location)


//   res.json({ location });
// });

// // Load the SSL certificate and private key
// const privateKey = fs.readFileSync('your-key.pem', 'utf8');
// const certificate = fs.readFileSync('your-cert.pem', 'utf8');

// const credentials = { key: privateKey, cert: certificate };

// // Create an HTTPS server
// const httpsServer = https.createServer(credentials, app);

// // Start the HTTPS server
// httpsServer.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

