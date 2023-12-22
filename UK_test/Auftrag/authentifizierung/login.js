const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000;

app.use(express.json())
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))

// POST /login Endpunkt mit Statuscode 200 und bei error 401
app.post('/login', function (request, response) {
  const { email, password } = request.body
  //Hier wird nur überprüft ob das passwort m295 ist, die email aber nicht, da jede email funtionieren sollte
  if (password === 'm295') {
    request.session.email = email
    return response.status(200).json({ email: request.session.email })
  }
  return response.status(401).json({ error: 'Ungültige credentials' })
})

// GET /verify Endpunkt mit Statuscode 200 und bei error 401
app.get('/verify', function (request, response) {
  // Überprüft ob email eingeloggt ist
	if (request.session.email) {
		return response.status(200).json({ email: request.session.email })
	}
  return response.status(401).json({ error: "Nicht eingeloggt, logge dich zuerst ein" })
})

// GET /logout Endpunkt mit Statuscode 204 und bei error 401
app.delete('/logout', function (request, response) {
	// Überprüft ob email eingeloggt ist
	if (request.session.email) {
		// loggt aus
		request.session.email = null
		return response.status(200).send("erfolgreich ausgelogged")
	}
  return response.status(401).json({ error: "Nicht eingelogged" })
})

// Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
  