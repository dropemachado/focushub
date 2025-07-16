import { useState, useEffect } from 'react';

export function useMissionStore() {
  const [missions, setMissions] = useState([]);

  // Carregar as missões do backend
  useEffect(() => {
    fetch('http://localhost:4000/api/tasks')
      .then(res => res.json())
      .then(data => setMissions(data))
      .catch(err => console.error('Erro ao buscar tarefas:', err));
  }, []);

  // Adicionar nova missão via POST
  async function addMission(title) {
    const res = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });

    if (res.ok) {
      const newMission = await res.json();
      setMissions(prev => [...prev, newMission]);
    }
  }

  // Alternar missão via PATCH
  async function toggleMission(id) {
    const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: 'PATCH'
    });

    if (res.ok) {
      const updated = await res.json();
      setMissions(prev =>
        prev.map(m => (m.id === updated.id ? updated : m))
      );
    }
  }

  return { missions, addMission, toggleMission };
}
