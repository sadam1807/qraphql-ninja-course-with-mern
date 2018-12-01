const express = require('express');
const graphqlHTTP = require('express-graphql');
const  app = express();

app.use('/graphql',graphqlHTTP ({

}));

app.listen(4000,() => {
    console.log('server started at port 4000');
})