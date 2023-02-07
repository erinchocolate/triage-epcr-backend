// Allows environment variables
require('dotenv').config();
// Express
const express = require('express');
const app = express();
// Middleware
app.use(express.json());
// Routes
app.use("/epcrs", require("./routes/epcrRoutes"));
// Server
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

