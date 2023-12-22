const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000;

// eine Midelware, welche einen JSON erkennt, und man ihn so einfügen kann, ohne dass es ihn als String erkennt
app.use(express.json())
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))


const login = require('./login.js')
app.use('/', login)

const tasks = require('./tasks.js')
app.use('/', tasks)


// Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

