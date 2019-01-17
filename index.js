const app = require('./app');

app
  .use('/promise', require('./controllers/promise'))
  .use('/stream', require('./controllers/stream'))
  .all('*', (req, res) => res.sendStatus(404))
  .listen(3000);
