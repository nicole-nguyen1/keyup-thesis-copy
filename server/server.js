require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const graphQLHTTP = require('express-graphql');
const path = require('path');
const schema = require('./graphql/schema');
const { passport } = require('./passport.js');
const session = require('express-session');

const port = process.env.PORT || 1337;

const app = express();

//====================
//MIDDLEWARE
//====================
app.use(express.static(path.join(__dirname, '../client/dist'), { index: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
//====================
//ENDPOINTS
//====================
app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
  })
);


app.get('/', function(request, response) {
  response.redirect('/home');
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));