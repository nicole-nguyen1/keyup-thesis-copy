require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const graphQLHTTP = require('express-graphql');
const path = require('path');
const schema = require('./graphql/schema');
const { passport } = require('./helpers/passport.js');

const port = process.env.PORT || 1337;

const app = express();

//====================
//MIDDLEWARE
//====================
app.use(express.static(path.join(__dirname, '../client/dist'), { index: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
//====================
//ENDPOINTS
//====================
app.use('/graphql', graphQLHTTP((req, res) => ({
  schema,
  graphiql: true,
  context: {req, res}
}))
);


app.get('/', function(request, response) {
  response.redirect('/home');
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));