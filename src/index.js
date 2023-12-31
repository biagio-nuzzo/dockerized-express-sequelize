//////////////////////////////////////////////// ENVIRONMENT
// Load environment variables from the .env file into process.env
// The "dotenv" module helps in managing and accessing environment-specific configuration
// Make sure to create a .env file in the project root directory with key-value pairs
require("dotenv").config();
//////////////////////////////////////////////// END ENVIRONMENT

//////////////////////////////////////////////// EXPRESS
// Set up Express.js application
// Create an instance of Express.js and assign it to the "app" variable
// "app" will be used to define routes and handle HTTP requests and responses
const express = require("express");
const app = express();

// Parse request bodies as JSON
app.use(express.json());
//////////////////////////////////////////////// END EXPRESS

//////////////////////////////////////////////// PASSPORT
// Passport.js is an authentication middleware for Node.js
// It is used to authenticate requests, which it does through an extensible set of plugins known as strategies
// See http://www.passportjs.org/docs/
require("./api/auth/utils/passport");

//////////////////////////////////////////////// DATABASE
// Sequelize is an ORM for interacting with the database
// Use the "sequelize" object to define models and perform database operations
const sequelize = require("./util/database");

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database!");
    app.listen(8000, () => {
      console.log("Server started on port 8000");
    });
  })
  .catch((err) => {
    console.log("Cannot connect to the database!");
    console.log(err);
  });
//////////// END DATABASE

//////////// MODELS
// See https://sequelize.org/master/manual/getting-started.html
// Define Sequelize models
// These models represent the database tables and their relationships
// Sequelize uses these models to synchronize the database schema
const User = require("./models/user");
//////////////////////////////////////////////// END MODELS

//////////////////////////////////////////////// CORS
const cors = require("cors");

// See https://expressjs.com/en/resources/middleware/cors.html
// Enable CORS for cross-origin resource sharing
app.use(cors());

// Set appropriate CORS headers to allow requests from any origin
// Replace '*' with specific origins if needed for stricter security
// app.use(cors({ origin: "*" })); // Uncomment this line for specific origins

// Allow all HTTP methods and headers for CORS requests
// app.use(cors({ methods: 'GET, POST, PUT, DELETE', allowedHeaders: '*' })); // Uncomment this line for specific methods and headers
//////////////////////////////////////////////// END CORS

//////////////////////////////////////////////// MORGAN
const morgan = require("morgan");

// See https://github.com/expressjs/morgan#predefined-formats
// Enable request logging with the predefined "dev" format
app.use(morgan("dev"));

// Customize the logging format by using other predefined formats or defining your own
// app.use(morgan("combined")); // Uncomment this line for the "combined" format
// app.use(morgan(":method :url :status :response-time ms")); // Uncomment this line for a custom format
//////////////////////////////////////////////// END MORGAN

//////////////////////////////////////////////// HELMET
const helmet = require("helmet");

// See https://helmetjs.github.io/
// Enable basic security headers with default options
app.use(helmet());

// Customize the security headers by enabling specific middleware
// app.use(helmet.contentSecurityPolicy()); // Uncomment this line to enable Content Security Policy
// app.use(helmet.xssFilter()); // Uncomment this line to enable XSS protection
// app.use(helmet.frameguard()); // Uncomment this line to enable X-Frame-Options header
// app.use(helmet.hsts()); // Uncomment this line to enable HTTP Strict Transport Security header
// app.use(helmet.noSniff()); // Uncomment this line to enable X-Content-Type-Options header
// app.use(helmet.hidePoweredBy()); // Uncomment this line to remove X-Powered-By header
// app.use(helmet.referrerPolicy()); // Uncomment this line to enable Referrer-Policy header
// app.use(helmet.featurePolicy()); // Uncomment this line to enable Feature-Policy header
// app.use(helmet.expectCt()); // Uncomment this line to enable Expect-CT header
//////////////////////////////////////////////// END HELMET

//////////////////////////////////////////////// ROUTES
// ROUTE HANDLER FOR ROOT PATH
// This route handler is responsible for handling GET requests to the root path ("/").
// It sends a "Hello World" response to the client making the request.

// Modify the response message or add additional logic as needed for your application.
app.get("/", (req, res, next) => {
  // serve the file steps/step2.html
  res.sendFile(__dirname + "/steps/step2.html");
});

// Create routes for api under /api
app.use("/api/users", require("./routes/user"));
app.use("/api/auth/", require("./routes/auth"));
//////////////////////////////////////////////// END ROUTES
