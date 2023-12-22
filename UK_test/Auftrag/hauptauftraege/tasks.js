/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
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

// GET /tasks Endpunkt mit get mehtod und mit Statuscode 200
app.get('/tasks', (request, response) => {
  response.status(200).json(tasks);
});

// POST /tasks Endpunkt mit push mehtod und mit Statuscode 201 und einer random id
app.post('/tasks', (request, response) => {
  const newTask = { ...request.body, id: randomUUID() };
  tasks.push(newTask);
  response.status(201).json(newTask);
});

// GET /tasks/:id Endpunkt mit mit find method und mit Statuscode 200 und bei error 404
app.get('/tasks/:id', (request, response) => {
  const task = tasks.find((task) => task.id === request.params.id);
  if (task) {
    response.status(200).json(task);
  } else {
    response.status(404).json({ error: 'Task wurde nich gefunden' });
  }
});

// PATCH /tasks/:id Endpunkt mit find mehtod und mit Statuscode 200 und bei error 404
app.patch('/tasks/:id', (request, response) => {
  const taskId = request.params.id;
  const keys = Object.keys(request.body);
  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (taskToUpdate) {
    keys.forEach((key) => taskToUpdate[key] = request.body[key]);
    response.status(200).json(tasks);
  } else {
    response.status(404).json({ error: 'Task wurde nicht gefunden.' });
  }
});

// DELETE /tasks/:id Endpunkt mit filter mehtod und mit Statuscode 200 und bei error 404
// initialLenght überprüft ob die neue task kleiner ist als die alte Task, welche man löschen will
app.delete('/tasks/:id', (request, response) => {
  const taskId = request.params.id;
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== taskId);

  if (tasks.length !== initialLength) {
    response.status(200).json({ message: 'Task wurde erfolgreich gefunden und gelöscht' });
  } else {
    response.status(404).json({ error: 'Task wurde nicht gefunden' });
  }
});

// Server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
