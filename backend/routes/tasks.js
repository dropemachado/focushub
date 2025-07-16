const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'Focar por 25 minutos',
    done: false
  },
  {
    id: 2,
    title: 'Evitar distrações por 1 hora',
    done: false
  }
];

// Buscar todas as tarefas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Criar nova tarefa
router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Título inválido' });
  }

  const newTask = {
    id: Date.now(),
    title,
    done: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Alternar conclusão da tarefa
router.patch('/:id', (req, res) => {
  const taskId = Number(req.params.id);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  task.done = !task.done;
  res.json(task);
});

// Deletar tarefa
router.delete('/:id', (req, res) => {
  const taskId = Number(req.params.id);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const index = tasks.findIndex(t => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  const deletedTask = tasks.splice(index, 1)[0];
  res.json(deletedTask);
});

module.exports = router;
