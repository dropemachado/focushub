const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'Focar por 25 minutos',
    completed: false
  },
  {
    id: 2,
    title: 'Evitar distrações por 1 hora',
    completed: false
  }
];

// Buscar todas as tarefas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Criar nova tarefa
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Marcar tarefa como concluída
router.patch('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

module.exports = router;
