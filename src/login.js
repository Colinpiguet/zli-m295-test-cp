/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const express = require('express'); // Importiert das Express-Framework

const router = express.Router(); // Initialisiert einen Express-Router

// POST /login Endpunkt mit Statuscode 200 und bei error 401
router.post('/login', (request, response) => {
  const { email, password } = request.body;
  // Hier wird nur überprüft ob das passwort m295 ist, die email aber nicht, da jede email funtionieren sollte
  if (password === 'm295') {
    request.session.email = email;
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Ungültige credentials' });
});

// GET /verify Endpunkt mit Statuscode 200 und bei error 401
router.get('/verify', (request, response) => {
  // Überprüft ob email eingeloggt ist
  if (request.session.email) {
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Nicht eingeloggt, logge dich zuerst ein' });
});

// GET /logout Endpunkt mit Statuscode 204 und bei error 401
router.delete('/logout', (request, response) => {
  // Überprüft ob email eingeloggt ist
  if (request.session.email) {
    // loggt aus
    request.session.email = null;
    return response.status(200).send('erfolgreich ausgelogged');
  }
  return response.status(401).json({ error: 'Nicht eingelogged' });
});

// eslint-disable-next-line linebreak-style
module.exports = router; // Exportiert den Router für die Verwendung in anderen Modulen
