//imports dependencies and files for server to build off of and function
const path = require('path');
const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3005;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//sets parameters and age limit of user sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sess));

  const hbs = exhbs.create({ helpers });
//establishes handlebars for use
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(routes);
  //calls sequelize and has app listen at the established port
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(`listening at ${PORT}!!`)
    );
  });
