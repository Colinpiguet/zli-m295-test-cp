const { randomUUID } = require('node:crypto');
const express = require('express');
const app = express();
const port = 3000;

// eine Midelware, welche einen JSON erkennt, und man ihn so einfügen kann, ohne dass es ihn als String erkennt
app.use(express.json());

//leerer Array für die Tasks
let tasks = [];

// GET /tasks Endpunkt mit Statuscode 200
app.get('/tasks', (request, response) => {
    response.status(200).json(tasks);
  });
  
// Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });