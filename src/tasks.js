/* eslint-disable max-len */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
//  die untere Zeile macht random id
const { randomUUID } = require('node:crypto');
const express = require('express');

const router = express.Router();

// leerer Array für die Tasks
const tasks = [];

// GET /tasks Endpunkt mit get mehtod und mit Statuscode 200
router.get('/tasks', (request, response) => {
  response.status(200).json(tasks);
});

// POST /tasks Endpunkt mit push mehtod und mit Statuscode 201 und einer random id
router.post('/tasks', (request, response) => {
  const newTask = { ...request.body, id: randomUUID() };
  tasks.push(newTask);
  response.status(201).json(newTask);
});

// GET /tasks/:id Endpunkt mit mit find method und mit Statuscode 200 und bei error 404
router.get('/tasks/:id', (request, response) => {
  const task = tasks.find((task) => task.id === request.params.id);
  if (task) {
    response.status(200).json(task);
  } else {
    response.status(404).json({ error: 'Task wurde nich gefunden' });
  }
});

// PATCH /tasks/:id Endpunkt mit find mehtod und mit Statuscode 200 und bei error 404
router.patch('/tasks/:id', (request, response) => {
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
router.delete('/:id', (request, response) => {
  // initialTaskLenght überprüft ob die neue task kleiner ist als die alte Task, welche man löschen will !! IDEE VON CHAT GPT !!
  const initialTaskLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== request.params.id);
  if (tasks.length < initialTaskLength) {
    response.status(400).json({ message: 'Löschen nicht möglich.' });
  } else {
    response.status(200).json(tasks).send('Erfolgreich gelöscht.');
  }
});

module.exports = router;
