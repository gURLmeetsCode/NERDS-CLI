'use strict'
const session = require('express-session')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport');
const app = express()


// we will need our sequelize instance from somewhere
const db = require('./db/_db')


// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

if (process.env.NODE_ENV === 'development') {
  require('../localSecrets'); // this will mutate the process.env object with your secrets.
}

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// sync so that our session table gets created
dbStore.sync();

// plug the store into our session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})


// auth mount + routes
app.use('/auth', require('./routes/auth'))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))



// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

module.exports = app;
