const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema');
const mongoose = require('mongoose');
 const cors = require('cors');
const  app = express();

app.use(cors());

mongoose.connect('mongodb://sadam:sadam1234@ds143070.mlab.com:43070/gql-ninja', {useNewUrlParser:true})
mongoose.connection.once('open', () =>{
    console.log('connected to db');
});
mongoose.set('useFindAndModify', false);

app.use('/api',graphqlHTTP ({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('server started at port 4000');
})