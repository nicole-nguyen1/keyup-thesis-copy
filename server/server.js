require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const graphQLHTTP = require('express-graphql');
const path = require('path');
const schema = require('./graphql/schema');

const port = process.env.PORT || 1337;

const app = express();

//ROUTES
const form = require('./routes/form');

app.use(bodyParser.json());

//graphql endpoint
app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true
}));

app.use('/api/form', form);

//set up index in client folder
app.use(express.static(path.join(__dirname, '../client/dist'), { index: false }));

app.get('/', function(request, response) {
  response.redirect('/home');
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));