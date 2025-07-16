import { useState, useEffect } from 'react';

export function useMissionStore() {
  const [missions, setMissions] = useState(() => {
    const stored = localStorage.getItem('missions');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('missions', JSON.stringify(missions));
  }, [missions]);

  function addMission(title) {
    setMissions([
      ...missions,
      { id: Date.now(), title, done: false }
    ]);
  }

  function toggleMission(id) {
    setMissions(
      missions.map((m) =>
        m.id === id ? { ...m, done: !m.done } : m
      )
    );
  }

  return { missions, addMission, toggleMission };
}
