// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets 'public' as the root folder when coming from front-end
app.use(express.static('public'));

// API Routes
require('./routes/apiRoutes')(app);

// HTML Routes
require('./routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });