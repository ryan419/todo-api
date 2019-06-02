const express = require('express');
const { postgraphile } = require('postgraphile');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('running server'));
app.use(
  '/todos',
  postgraphile(
    'postgres://postgres:postgres@localhost:5432/todolistdb',
    'public',
    {
      // externalUrlBase: "/myproxypath/path/to",
      graphqlRoute: '/graphql',
      graphiql: true,
      graphiqlRoute: '/graphiql',
    },
  ),
);

app.listen(3000, () => console.log('App listening on port 3000!'));
