# M295 LB B
Name: Task und Login Programm
Author: Colin Piguet
Datum: 22.12.2023
# Einrichtung:
- Lade das dictionary herunter.
- Stelle sicher, dass Docker läuft.
- Öffne den Ordner in VS Code.
- Öffne den Ordner erneut in einem Node.js-Javascript-Container.
- Führe npm install aus.
- Führe npm run start aus.
- Öffne einen Client wie Postman.
# Endpunkte
## Tasks-Modul
- **GET /tasks**: Alle Aufgaben abrufen, die derzeit gespeichert sind.
  - **Erwartete Daten:** Keine.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreiche Rückgabe.
      - Datenformat: JSON mit allen aktuellen Aufgaben.
    - HTTP-Status 404: Keine Aufgaben gefunden.
      - Datenformat: JSON mit einer Fehlermeldung.
- **POST /tasks**: Eine neue Aufgabe hinzufügen, indem man einen JSON mit den Aufgabendaten bereitstellt.
  - **Erwartete Daten:**
    - name (String): Der Name der Aufgabe.
    - description (String): Die Beschreibung der Aufgabe.
    - ...
  - **Rückgabewerte:**
    - HTTP-Status 201: Erfolgreich hinzugefügt.
      - Datenformat: JSON mit den Details der hinzugefügten Aufgabe.
    - HTTP-Status 400: Fehler bei den Validierungen.
      - Datenformat: JSON mit einer Fehlermeldung.
- **GET /tasks/:id**: Eine bestimmte Aufgabe abrufen, indem man die id der Aufgabe angibt.
  - **Erwartete Daten:** Keine.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreiche Rückgabe.
      - Datenformat: JSON mit den Details der gefundenen Aufgabe.
    - HTTP-Status 404: Aufgabe nicht gefunden.
      - Datenformat: JSON mit einer Fehlermeldung.
- **PATCH /tasks/:id**: Eine Aufgabe aktualisieren, indem man ein JSON mit den zu aktualisierenden Daten angibt.
  - **Erwartete Daten:** JSON mit den zu aktualisierenden Aufgabendaten.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreich aktualisiert.
      - Datenformat: JSON mit allen aktuellen Aufgaben.
    - HTTP-Status 404: Aufgabe nicht gefunden.
      - Datenformat: JSON mit einer Fehlermeldung.
- **DELETE /tasks/:id**: Eine Aufgabe löschen, indem man die ID der Aufgabe angibt.
  - **Erwartete Daten:** Keine.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreich gelöscht.
      - Datenformat: JSON mit allen aktuellen Aufgaben.
    - HTTP-Status 404: Aufgabe nicht gefunden.
      - Datenformat: JSON mit einer Fehlermeldung.
### Login-Modul
- **POST /login**: Benutzer einloggen, indem man eine E-Mail und ein bestimmtes Passwort (m295) in einem JSON angibt.
  - **Erwartete Daten:**
    - email (String): Die E-Mail des Benutzers.
    - password (String): Das Passwort des Benutzers.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreich eingeloggt.
      - Datenformat: JSON mit den Benutzerdetails.
    - HTTP-Status 401: Ungültige Anmeldeinformationen.
      - Datenformat: JSON mit einer Fehlermeldung.
- **GET /verify**: Überprüfen, ob ein Benutzer eingeloggt ist.
  - **Erwartete Daten:** Keine.
  - **Rückgabewerte:**
    - HTTP-Status 200: Benutzer ist eingeloggt.
      - Datenformat: JSON mit den Benutzerdetails.
    - HTTP-Status 401: Benutzer ist nicht eingeloggt.
      - Datenformat: JSON mit einer Fehlermeldung.
- **DELETE /logout**: Benutzer ausloggen.
  - **Erwartete Daten:** Keine.
  - **Rückgabewerte:**
    - HTTP-Status 200: Erfolgreich ausgeloggt.
      - Datenformat: Textnachricht "Erfolgreich ausgeloggt".
    - HTTP-Status 401: Benutzer ist nicht eingeloggt.
      - Datenformat: JSON mit einer Fehlermeldung.
