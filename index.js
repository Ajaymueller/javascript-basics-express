const app = require('./src/app');

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Now serving your Express app at http://localhost:${APP_PORT}`); // eslint-disable-line
});

/* here we are calling the listen method on the app object - this starts the server and tells the server to listen on the given port (3000) */
