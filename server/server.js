require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const graphQLHTTP = require('express-graphql');
const path = require('path')
const schema = require('./graphql/schema');

const port = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());
app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}));

app.use(express.static(path.join(__dirname, '../client/dist')));
//set up index in client folder

app.listen(port, () => console.log(`Listening on port ${port}`));