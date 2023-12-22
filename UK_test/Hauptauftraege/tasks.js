/* eslint-disable no-shadow */
//  untere zeile macht random id
const { randomUUID } = require('node:crypto');
const express = require('express');

const app = express();
const port = 3000;

// eslint-disable-next-line max-len
// eine Midelware, welche einen JSON erkennt, und man ihn so einfügen kann, ohne dass es ihn als String erkennt
app.use(express.json());

// leerer Array für die Tasks
const tasks = [];

// GET /tasks Endpunkt mit Statuscode 200
app.get('/tasks', (request, response) => {
  response.status(200).json(tasks);
});

// POST /tasks Endpunkt mit Statuscode 201 und einer random id
app.post('/tasks', (request, response) => {
  const newTask = { ...request.body, id: randomUUID() };
  tasks.push(newTask);
  response.status(201).json(newTask);
});

// GET /tasks/:id Endpunkt mit Statuscode 200 und bei error 404
app.get('/tasks/:id', (request, response) => {
  const task = tasks.find((task) => task.id === request.params.id);
  if (task) {
    response.status(200).json(task);
  } else {
    response.status(404).json({ error: 'Aufgabe wurde nich gefunden' });
  }
});

// Server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
