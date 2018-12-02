const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema');
const  app = express();

app.use('/graphql',graphqlHTTP ({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('server started at port 4000');
})