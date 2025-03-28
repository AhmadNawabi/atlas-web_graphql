// Initialize the serber set on port 8080

// Importing the express module
const express = require('express');
// Importing the express-graphql middleware
const {graphqlHTTP} = require('express-graphql');
// Importing the taskType from the schema
const schema = require('./schema/schema');
// Allow cross-origin requests
const cors = require('cors');
// Require the mongoose module
const mongoose = require('mongoose');


const app = express();

app.use(cors());

// Connect to the database
mongoose.connect('mongodb+srv://1234567890:1234567890@cluster0.jk2tcx7.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// Use the graphqlHTTP middleware with your schema
app.use('/graphql', graphqlHTTP({
  schema, // Make sure this references the schema you've defined
  graphiql: true, // Enables the GraphiQL interface
}));

// Listening for requests on port 8080
app.listen(8080,()=>{
  console.log('now listening for request on port 8080');
});
