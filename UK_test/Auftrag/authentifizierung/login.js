// npm install express express-session

const express = require('express')
const session = require('express-session')
const app = express()

app.use(express.json())
app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: false,
  cookie: {}
}))

app.post('/login', function (request, response) {
	const { email, password } = request.body
	if (email?.toLowerCase() == secretAdminCredentials.email && password == secretAdminCredentials.password) {
		request.session.email = email
		return response.status(200).json({ email: request.session.email })
	}
  return response.status(401).json({ error: "Invalid credentials" })
})

// Server
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
  });
  