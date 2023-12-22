/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable semi */
/* eslint-disable max-len */

// Mit begleit Präsentation gemacht

const express = require('express') // Importiert das Express-Framework
const session = require('express-session') // Importiert das Express-Session-Modul

const app = express()
const port = 3000; // Legt den Port fest

app.use(express.json()) // eine Midelware, welche einen JSON erkennt, und man ihn so einfügen kann, ohne dass es ihn als String erkennt

// Express-Session-Konfiguration
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {},
}))

// Middleware für den Login-Endpunkt
const login = require('./login.js')
app.use('/', login)

// Middleware für den Tasks-Endpunkt
const tasks = require('./tasks.js')
app.use('/', tasks)

// Startet Server auf angegebenen Port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
