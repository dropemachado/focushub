import React from 'react';
import { useMissionStore } from '../logic/missionStore';

export default function ProgressBar() {
  const { missions } = useMissionStore();
  const total = missions.length;
  const done = missions.filter((m) => m.done).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div>
      <p>Progresso: {percent}%</p>
      <progress value={percent} max="100"></progress>
    </div>
  );
}
