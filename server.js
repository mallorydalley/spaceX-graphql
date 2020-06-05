const express = require('express'),
    graphqlHTTP = require('express-graphql'),
    schema = require('./schema')
    PORT = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(PORT, () => console.log(`Server running on ${PORT}`))